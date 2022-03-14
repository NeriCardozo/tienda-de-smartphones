import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import './checkoutForm.css';
import { db } from '../../services/firebase/firebaseConfig'
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import CheckoutItem from '../CheckoutItem/CheckoutItem'
import { Redirect } from 'react-router-dom';

function CheckoutForm() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
    const {cart, getTotalPrice, clearCart} = useContext(CartContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [cp, setCp] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')
    const [idOrden, setIdOrden] = useState('')

    if(cart.length === 0 && idOrden === ''){
      return (<h1>No tienes productos agregados!</h1>)
    }

    const objContact = {
      name,
      email,
      phone,
      address,
      province,
      city,
      cp,
      paymentMethod
  }

    const submitOrder = (e) => {
      e.preventDefault();
      if(name === '' || email === '' || phone === '' || address === '' || province === '' || city === '' || cp === '' || paymentMethod === ''){
        alert('Por favor, complete todos los campos.')
      }else{
        setIsOrderPlaced(false);
        const order = {
          buyer: objContact,
          items: cart,
          total: getTotalPrice(),
          date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db);
        const itemIds = order.items.map(i => i.id)

        const outOfStock = [];
          getDocs(query(collection(db, 'items'),where(documentId(), 'in', itemIds))).then(response => {
            response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= order.items.find(item => item.id === docSnapshot.id).qty) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - order.items.find(prod => prod.id === docSnapshot.id).qty})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(db, 'orders'), order).then(({id}) => { 
                          setIdOrden(id)
                          batch.commit();
                          clearCart();
                          alert(`La orden ${id} ha sido creada con éxito.`);
                          setIsOrderPlaced(true);
                        })}else{
                          outOfStock.forEach( (prod)=> {
                            alert(`El producto ${prod.id} no tiene stock suficiente. Vaya al carrito y quítelo para avanzar con la compra.`)
                            setIsOrderPlaced(false);
                          })
                        }}
          )
        }
      }
      if(!isOrderPlaced){
        return ( 
          <div className="checkoutform">
        <p>Hola! El total de tu compra es de ${getTotalPrice()}</p>
        <div>
            Tus productos son:
            <ul>
            {cart.map((c)=><CheckoutItem key={c.id} product={c} > </CheckoutItem>)}
            </ul>
        </div>
        <form onSubmit={submitOrder}>

<div className="row">
  <div className="col-50">
    <h3>Datos de la compra</h3>
    <label htmlFor="name"><i className="fa fa-user"></i> Nombre completo</label>
    <input type="text" id="name" name="name" placeholder="José Piedras" onChange={({ target }) => setName(target.value)}/>
    <label htmlFor="email"><i className="fa fa-envelope" ></i> Email</label>
    <input type="text" id="email" name="email" placeholder="jpiedras@example.com" onChange={({ target }) => setEmail(target.value)} />
    <label htmlFor="phone"><i className="fa fa-solid fa-phone"></i> Teléfono</label>
    <input type="text" id="phone" name="phone" placeholder="11 1234-1234" onChange={({ target }) => setPhone(target.value)} />
    <label htmlFor="direccion"><i className="fa fa-address-card-o"></i> Dirección</label>
    <input type="text" id="direccion" name="direccion" placeholder="Calle Falsa 2120 piso 3 departamento 10" onChange={({ target }) => setAddress(target.value)}/>
    <label htmlFor="province"><i className="fa fa-institution"></i> Provincia</label>
    <input type="text" id="province" name="province" placeholder="Capital Federal" onChange={({ target }) => setProvince(target.value)}/>

    <div className="row">
      <div className="col-50">
        <label htmlFor="city">Ciudad</label>
        <input type="text" id="city" name="city" placeholder="Palermo" onChange={({ target }) => setCity(target.value)}/>
      </div>
      <div className="col-50">
        <label htmlFor="cp">Código Postal</label>
        <input type="text" id="cp" name="cp" placeholder="1414" onChange={({ target }) => setCp(target.value)}/>
      </div>      
      <div className="col-50">
        <h4>Método de pago</h4>
        <label htmlFor="payment_method">Efectivo</label>
        <input type="radio" id="efectivo" name="payment_method" value="efectivo" onChange={({ target }) => setPaymentMethod(target.value)} />
        <label htmlFor="payment_method">Transferencia bancaria</label>
        <input type="radio" id="transferencia" name="payment_method" value="transferencia" onChange={({ target }) => setPaymentMethod(target.value)}/>
      </div>
    </div>
  </div>
</div>
<input type="submit" value="Confirmar compra" className="btn" />
</form>
        </div>
    );
  }else{
    return(
      <a href={`https://wa.me/%2B5491163648773?text=Hola!%20Me%20contacto%20por%20la%20orden%20${idOrden}%20que%20hice%20en%20la%20tienda%20de%20smartphones.`}>Confirmar el pago por WhatsApp</a>
    )
  }
}

export default CheckoutForm;
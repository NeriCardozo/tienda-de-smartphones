import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import './CartRow.css'

function CartRow(props) {
    const i = props.item;
    const { removeItem, addOne, substractOne } = useContext(CartContext)

    const remove = ()=> {
        removeItem(i.id, i.qty)
    }
    const add = () =>{
        addOne(i.id)
    }
    const substract = () => {
        substractOne(i.id)
    }

    if(i.qty === 0 ){
        return false;
    }

    return (
        <div className='cartRow'>
                <img className="img" src={i.img} alt="" />
                <div className="details">
                <p>{i.name}</p>
                <p>Precio individual: ${i.price}</p>
                <p>Cantidad seleccionada: {i.qty}</p>
                <button onClick={add}>Agregar 1 unidad</button>
                <button onClick={remove}>Borrar item</button>
                <button onClick={substract}>Quitar 1 unidad</button>
                </div>
                </div>
    )
}

export default CartRow;

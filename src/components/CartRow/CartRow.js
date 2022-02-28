import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';

function CartRow(props) {
    const i = props.item;
    const { removeItem } = useContext(CartContext)

    const remove = ()=> {
        removeItem(i.id)
    }

    return (
        <div className='cartrow'>
                <img src={i.url} alt="" />
                <p>{i.nombre}</p>
                <p>${i.precio}</p>
                <p>{i.qty}</p>
                <button onClick={remove}>Borrar item</button>
                </div>
    )
}

export default CartRow;

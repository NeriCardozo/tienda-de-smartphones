import React, {useContext} from 'react'
import CartContext from '../../context/CartContext';
import CartRow from '../CartRow/CartRow';
import CartSummary from '../CartSummary/CartSummary';
import './CartList.css'

function CartList () {

    const { cart, getCount } = useContext(CartContext)

    if(getCount() < 1){
        return <p>No se agregaron productos :(</p>
    }
        return (
            <div className='cartlist'>
            {
                cart.map( (i)=> 
                <CartRow key={i.id} item={i} />)
            }
        <CartSummary/>
            </div>
        )
}

export default CartList;
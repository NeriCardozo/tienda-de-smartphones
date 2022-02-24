import React, {useContext} from 'react'
import CartContext from '../context/CartContext';
import CartRow from './CartRow';

function CartList () {

    const { cart } = useContext(CartContext)


    return (
        <div className='cartlist'>
            {cart.length > 0 ? 
            cart.map( (i)=> 
                <CartRow item={i} />
                ): <p>No se agregaron productos :(</p>
                }
        </div>
    )
}

export default CartList;
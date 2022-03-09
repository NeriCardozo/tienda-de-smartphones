import React, {useContext} from 'react';
import CartContext from '../../context/CartContext';
import './CartSummary.css';
import { Link } from 'react-router-dom';

function CartSummary() {
    
    const { getTotalPrice } = useContext(CartContext);

    return ( 
        <div className="cartsummary">
        <p>Total de la orden: ${getTotalPrice()}</p>
       <Link to="/checkout"><button>Ir al pago</button> </Link>
        </ div>
     );
}

export default CartSummary;
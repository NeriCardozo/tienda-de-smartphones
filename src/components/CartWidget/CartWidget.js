import React, {useContext} from 'react';
import { MdShoppingCart } from "react-icons/md";
import '../Navbar/navbar.css'
import CartContext from '../../context/CartContext'

function CartWidget() {
    const {checkCount} = useContext(CartContext)

    return(
            <li href="#">
            <MdShoppingCart /> {checkCount()}
            </li>
    )
}

export default CartWidget;
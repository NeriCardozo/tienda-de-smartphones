import React from 'react';
import './navbar.css'
import CartWidget from './CartWidget.js'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <div className="header">
    <Link to="/">
 <img className='header_logo'
      alt=' '
      src='https://previews.123rf.com/images/findriyani/findriyani1902/findriyani190200477/116365758-vettore-del-logo-dello-smartphone.jpg?fj=1'
/>         
  </Link>

    <Link to="/Category/Samsung"><div className="header_text">Samsung</div></Link>
    <Link to="/Category/Apple"><div className="header_text">Apple</div></Link>
    <Link to="/Category/Xiaomi"><div className="header_text">Xiaomi</div></Link>
    <Link to="/Category/other"><div className="header_text">Otras marcas</div></Link>

    <CartWidget />

</div>
  )
  ;
}

export default NavBar;

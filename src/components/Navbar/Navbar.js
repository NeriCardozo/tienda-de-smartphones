import React, { useEffect, useState } from 'react';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import Category from '../Category/Category.js';
import { Link } from 'react-router-dom';
import {getCategories} from '../asyncs/asyncmocks'

function NavBar() {
  const [categories, setCategories] = useState(["Apple","Samsung"]);

  // useEffect( () => {
  //   if (categories){
  //     getCategories().then(cats => {
  //         setCategories(cats)
  //       })}
  //     },[categories])

  return (
    <div className="container">
    <div className="navbar">
    <div className="logo">
    <Link to="/"><img className='header_logo'
      src='./logo.png'
      alt="logo"
/></Link>
</div>
  <nav>
    <ul>
    {categories.map((c)=><Category category={c}> </Category>)}
    <Link to={`/Category/other`}> <li className="header_text">Otras marcas</li></Link>
    <Link to="./cart"> <CartWidget /> </Link>
    </ul>
  </nav>

</div>
</div>
  )
}

export default NavBar;

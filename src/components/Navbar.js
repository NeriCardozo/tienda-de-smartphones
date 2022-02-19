import React, { useEffect, useState } from 'react';
import './navbar.css'
import CartWidget from './CartWidget.js'
import Category from './Category.js';
import { Link } from 'react-router-dom';
import {getCategories} from './asyncmocks'

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    if (categories){
      getCategories().then(cats => {
          setCategories(cats)
        })}
      },[])

  return (
      <div className="header">
    <Link to="/">
 <img className='header_logo'
      alt=' '
      src='https://previews.123rf.com/images/findriyani/findriyani1902/findriyani190200477/116365758-vettore-del-logo-dello-smartphone.jpg?fj=1'
/>         
  </Link>
    {categories.map((c)=><Category category={c}> </Category>)}
    
    <CartWidget />

</div>
  )
}

export default NavBar;

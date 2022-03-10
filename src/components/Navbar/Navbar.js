import React, { useEffect, useState } from 'react';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import Category from '../Category/Category.js';
import { getDocs, collection} from 'firebase/firestore';
import { db, getCategories } from '../../services/firebase/firebaseConfig';
import { Link } from 'react-router-dom';

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const categoryList = new Promise((resolve, reject) => {
      resolve(getCategories());
    }).catch((err) =>{
      console.log(err)
    }).then(response => {
      setCategories(response)
    })

      
    },[]) 
 
  return (
    <div className="container">
    <div className="navbar">
    <div className="logo">
    <Link to="/"><img className='header_logo'
      src='../logo.png'
      alt="logo"
/></Link>
</div>
  <nav>
    <ul>
    {categories.map((c)=><Category key={c.id} category={c} > </Category>)}
    <Link to={`/Category/other`}> <li className="header_text">Otras marcas</li></Link>
    <Link to="./cart"> <CartWidget /> </Link>
    </ul>
  </nav>
</div>
</div>
  )
}

export default NavBar;

import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firebaseConfig';
import './ItemListContainer.css';

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();


    useEffect(() => {
        setLoading(true)
        const productsList = new Promise((resolve, reject) => {
            resolve(getProducts(categoryName));
          }).catch((err) =>{
            console.log(err)
          }).then(response => {
            setProducts(response)
            setLoading(false)
          });
    },[categoryName]) 



    if (loading){return(
        <h1>Cargando...</h1>
        )
    }else{return (
        <ItemList products={products} />
        )
    }
}

export default ItemListContainer;
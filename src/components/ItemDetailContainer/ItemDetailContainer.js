import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import { getProductById } from '../../services/firebase/firebaseConfig';


function ItemDetailContainer(){

    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const product = new Promise((resolve, reject) => {
            resolve(getProductById(id));
          }).catch((err) =>{
            console.log(err)
          }).then(response => {
            setProduct(response)
          });
    },[id]) 

    return (
        <div className="container">
            <ItemDetail product={product}/>
        </div>
    )    
}
export default ItemDetailContainer
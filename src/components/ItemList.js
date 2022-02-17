import React, { useEffect, useState } from 'react';
import Item from './Item'
import './ItemList.css'
import {getProducts, getProductsByCategory} from './asyncmocks.js'
import { useParams } from 'react-router-dom';

function ItemList() {
    const [productos, setProductos] = useState([]);
    const {categoryName} = useParams()
    console.log(categoryName)
    
    useEffect(() => {
        setProductos([]); // Hacemos esto porque sino a veces se traba al navegar entre categorías.
        if (categoryName != null){
            getProductsByCategory(categoryName).then(item => {
                setProductos(item)
                console.log(item)
            }).catch(err  => {
                console.log(err)
            })
            
            return (() => {
                setProductos()
            })    
        }else{
            getProducts().then(item => {
                setProductos(item)
            }).catch(err  => {
                console.log(err)
            })
            
            return (() => {
                setProductos()
            })          
        }
    }, [categoryName]) // Se actualiza cada vez que detecta un cambio en los parametros de la URL

    if (productos.length > 0 ){
        return(
            <div className="itemlist">
            {productos.map( (p)=> 
            <Item producto={p}/>
            )}
        </div>
)   
}else{
    return <h1>Cargando...</h1>
}
}

export default ItemList;
    
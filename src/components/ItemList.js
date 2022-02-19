import React, { useEffect, useState } from 'react';
import Item from './Item'
import './ItemList.css'
import {getProducts, getProductsByCategory} from './asyncmocks.js'
import { useParams } from 'react-router-dom';

function ItemList() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams()
    
    useEffect(() => {
        setLoading(true);
        setProductos([]); // Hacemos esto porque sino a veces se traba al navegar entre categorías.
        if (categoryName != null){
            getProductsByCategory(categoryName).then(item => {
                setProductos(item)
                setLoading(false)
            }).catch(err  => {
                console.log(err)
            })
            
            return (() => {
                setProductos([])
            })    
        }else{
            getProducts().then(item => {
                setProductos(item)
                setLoading(false)
            }).catch(err  => {
                console.log(err)
            })
            
            return (() => {
                setProductos()
            })          
        }
    }, [categoryName])

    return (
        <div className="itemlist">
            {loading ? <h1>Cargando...</h1>:productos.length ? productos.map( (p)=> <Item producto={p}/>):<h1>No se encontraron productos!</h1>}
        </div>
    )
}   

export default ItemList;
    
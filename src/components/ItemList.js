import React, { useEffect, useState } from 'react';
import Item from './Item'
import {getProducts, getProduct} from './asyncmocks.js'

function ItemList() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProducts().then(item => {
            setProductos(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProductos()
        })          
    }, [])

    return ( 
        <div>
            {productos.map( (p)=> 
            <Item producto={p}/>
            )}
        </div>
     )
}

export default ItemList;
    
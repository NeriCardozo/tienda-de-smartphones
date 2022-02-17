import React, { useEffect, useState } from 'react';
import Item from './Item'
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import {getProduct} from './asyncmocks.js'

function ItemDetail() {
    const [producto, setProducto] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProduct(id).then(item => {
            setProducto(item)
        }).catch(err  => {
            console.log(err)
        })
        return (() => {
            setProducto()
        })          
    }, [id])

    return    <div>
              <Item producto={producto}/>
              <ItemCount producto={producto} />
              </div>
}

export default ItemDetail;
    
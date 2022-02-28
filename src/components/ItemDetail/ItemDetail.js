import React, { useEffect, useState } from 'react';
import Item from '../Item/Item'
import { Link, useParams } from 'react-router-dom';
import {getProduct} from '../asyncs/asyncmocks.js'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail() {
    const [producto, setProducto] = useState({});
    const {id} = useParams()
    const [added, setAdded] = useState(false);

    useEffect(() => {
        setAdded(false);
        setProducto([])
        getProduct(id).then(item => {
            setProducto(item)
        }).catch(err  => {
            console.log(err)
        })
        return (() => {
            setProducto();
        })          
    }, [id])

    return    <div className="itemdetail">
              <Item producto={producto} id={id}/>
              {
                 added === false ?  
                <ItemCount producto={producto} setAdded ={setAdded} />:
                <Link to={`/cart`}> <p>Ir al carrito</p></Link>
            }
              </div>
}

export default ItemDetail;
    
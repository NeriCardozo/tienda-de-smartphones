import React, { useState } from 'react';
import Item from '../Item/Item'
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({product}) {
    const [added, setAdded] = useState(false);

    return (
        <div className="itemdetail">
              <Item detail={true} item={product}/>
              {
                  added === false ?  
                  <ItemCount item={product} setAdded ={setAdded} />:
                  <Link to={`/cart`}> <p>Ir al carrito</p></Link>
                }
              </div>
        )
}

export default ItemDetail;
    
import React from 'react';
import ItemList from './ItemList'
import './ItemListContainer.css'
function ItemListContainer(props) {
    return (
        <div>{props.greeting}
        <div className="container">
            <ItemList />
        </div>
    </div>
    )
}

export default ItemListContainer;
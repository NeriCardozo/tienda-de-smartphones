import React from 'react';

function Item(props) 
{
    console.log(props)
    const item = props.producto;
    // return ( 
    //     <div className="item">
    //     <h1>{item.nombre}</h1>
    //     <img src={item.url} />
    //     <span className='stock'>Hay {item.stock} disponible/s!</span>
    // </ div>
    //  );
    return (
<div className="container">
        <div className="collection" sx={{ maxWidth: 770 }}>
        <img
          height="600"
          src={item.url}
          />
        <div className="grid-item">
          <h3 gutterBottom variant="h5" component="div">
          {item.nombre}
          </h3>
          <h3 variant="body2" color="text.secondary">
          Origen: {item.origen}
          </h3>
        </div>
     </div>
    </div>
    )
}

export default Item;
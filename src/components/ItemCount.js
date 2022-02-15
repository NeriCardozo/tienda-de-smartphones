import React, { useState, useEffect } from 'react';
import './ItemCount.css'
 function ItemCount(props)
 
 {
    const item = props.producto;
     
    const [count, setCount] = useState(0);

    const addOne = ()=> {
        if (count < item.stock){
            setCount(count + 1)
            console.log()
        }else{
            alert("No hay suficiente stock!")
        }
    }
    const substractOne = ()=> {
        if (count != 0){
            setCount(count - 1)
        }else{
            alert("No tienes agregado este producto!")
        }
    }
     return ( 
       
        <div>
        <h3>¿Deseas agregar o quitar unidades? Hay {item.stock} disponibles.</h3>
        <button onClick={addOne}>Sumar</button>
        <button onClick={substractOne}>Restar</button>
        <h3>Agregaste {count}</h3>
        <button onClick={addOne}>Agregar al carrito</button>
    </div>
      );
 }
 
 export default ItemCount;
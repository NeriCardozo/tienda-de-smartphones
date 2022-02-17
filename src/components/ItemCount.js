import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
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
<CardActions>
  <Button onClick={addOne} size="small">+</Button>
  <Typography variant="subtitle2" color="text.secondary">
{count}
  </Typography>
  <Button onClick={substractOne} size="small">-</Button>
  <Button onClick={addOne} size="medium">Agregar al carrito</Button>
</CardActions>
      );
 }
 
 export default ItemCount;
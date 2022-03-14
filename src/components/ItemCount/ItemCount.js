import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CartContext from '../../context/CartContext'
import './ItemCount.css'
 function ItemCount(props)
 
 
 {
    const { addItem } = useContext(CartContext)
    const item = props.item;
    const setAdded = props.setAdded;

     
    const [count, setCount] = useState(0);

    const addOne = ()=> {
        if (count < item.stock){
            setCount(count + 1)
        }else{
            alert("No hay suficiente stock!")
        }
    }
    const substractOne = ()=> {
        if (count !== 0){
            setCount(count - 1)
        }else{
            alert("No tienes agregado este producto!")
        }
    }

    const onAdd = () => {
        if(count !== 0){

            setAdded(true);
            addItem(item, count)
        }else{
            alert('No seleccionaste la cantidad')
        }
    }

     return ( 
<CardActions>
  <Button onClick={addOne} size="small">+</Button>
  <Typography variant="subtitle2" color="text.secondary">
{count}
  </Typography>
  <Button onClick={substractOne} size="small">-</Button>
  <Button onClick={onAdd} size="medium">Agregar al carrito</Button>
</CardActions>
      );
 }
 
 export default ItemCount;
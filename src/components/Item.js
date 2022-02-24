import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './Item.css'

function Item(props) {

  const item = props.producto;

return (
  <Card className="item" sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  alt=""
  height="400"
  image={item.url}
/>
<CardContent>
  <p>
    {item.nombre}
  </p>
  <Typography variant="body2" color="text.secondary">
    Ram: {item.ram}GB
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Precio: ${item.precio}
  </Typography>
    {!props.id? 
    <Link to={`/detail/${item.id}`}>
    <Typography variant="body2" color="text.secondary">
    Ver el producto
  </Typography>
    </Link>: 
    <Typography variant="body2" color="text.secondary">
    Stock disponible: {item.stock} unidad/es
  </Typography>}
</CardContent>
</Card>
)
}

export default Item;
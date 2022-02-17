import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

function Item(props) {

  const item = props.producto;

return (
  <Card sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  alt="green iguana"
  height="400"
  image={item.url}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {item.nombre}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Ram: {item.ram}GB
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Precio: ${item.precio}
  </Typography>
    <Link to={`/detail/${item.id}`}>
    <Typography variant="body2" color="text.secondary">
    Ver el producto
  </Typography>
    </Link>
</CardContent>
</Card>
)
}

export default Item;
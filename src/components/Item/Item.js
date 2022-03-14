import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './Item.css'

function Item({item, detail = false}) {

return (
  <Card className="item" sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  alt=""
  height="400"
  image={item.img}
/>
<CardContent>
  <p>
    {item.name}
  </p>
  <Typography variant="body2" color="text.secondary">
    Ram: {item.ram}GB
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Precio: ${item.price}
  </Typography>
    {!detail? 
    <Link to={`/detail/${item.id}`}>
    <Typography variant="body2" color="text.secondary">
    Ver el producto
  </Typography>
    </Link>: item.stock > 0 ?
    <Typography variant="body2" color="text.secondary">
    Stock disponible: {item.stock} unidad/es
  </Typography>:
      <Typography variant="body2" color="text.secondary">
      No hay unidades disponibles
      </Typography>
  }
</CardContent>
</Card>
)
}

export default Item;
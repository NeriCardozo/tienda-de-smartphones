import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ItemList({products}) {

    return (
        <Box className="itemlist" sx={{ width: '85%' }}>
            <Grid container spacing={5} columnSpacing={{ sm: 6}}>
             {products ? products.map( (p)=> <Grid key={p.id} item xs={"auto"}><Item key={p.id} item={p}/></Grid>):<h1>No se encontraron productos!</h1>}
            </Grid>
        </Box>
    )
}   

export default ItemList;
    
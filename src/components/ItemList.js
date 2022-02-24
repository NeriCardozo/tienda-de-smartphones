import React, { useEffect, useState } from 'react';
import Item from './Item'
import './ItemList.css'
import {getProducts, getProductsByCategory} from './asyncmocks.js'
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ItemList() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams()
    
    useEffect(() => {
        setLoading(true);
        setProductos([]); // Hacemos esto porque sino a veces se traba al navegar entre categorías.
        if (categoryName != null){
            getProductsByCategory(categoryName).then(item => {
                setProductos(item)
                setLoading(false)
            }).catch(err  => {
                console.log(err)
            })
            
            return (() => {
                setProductos([])
            })    
        }else{
            getProducts().then(item => {
                setProductos(item)
                setLoading(false)
            }).catch(err  => {
                console.log(err)
            })
            
            return (() => {
                setProductos()
            })          
        }
    }, [categoryName])

    return (
        <Box className="itemlist" sx={{ width: '85%' }}>
            <Grid container spacing={5} columnSpacing={{ sm: 6}}>
             {loading ? <h1>Cargando...</h1>:productos.length ? productos.map( (p)=> <Grid item xs={"auto"}><Item producto={p}/></Grid>):<h1>No se encontraron productos!</h1>}
            </Grid>
        </Box>
    )
}   

export default ItemList;
    
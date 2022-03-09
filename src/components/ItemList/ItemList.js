import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();


    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryName ?
            query(collection(db, 'items'), where('brand', '==', categoryName)) :
            collection(db, 'items');

            getDocs(collectionRef).then(response => {
                const productos = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(productos);
                console.log(productos)
        }).finally(
            setLoading(false)
        )
        return(()=> {
            setProducts()
        })
    },[categoryName]) 

    return (
        <Box className="itemlist" sx={{ width: '85%' }}>
            <Grid container spacing={5} columnSpacing={{ sm: 6}}>
             {loading ? <h1>Cargando...</h1>:products ? products.map( (p)=> <Grid item xs={"auto"}><Item product={p}/></Grid>):<h1>No se encontraron productos!</h1>}
            </Grid>
        </Box>
    )
}   

export default ItemList;
    
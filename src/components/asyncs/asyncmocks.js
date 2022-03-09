// import { useState } from 'react';
// import { getDocs, collection, query, where } from 'firebase/firestore'
// import { db } from '../../services/firebase/firebaseConfig'


// let categories = [
//     {id: "Samsung", title: "Samsung"},
//     {id: "Apple", title: "Apple"},
//     {id: "Xiaomi", title: "Xiaomi"},
//     {id: "Huawei", title: "Huawei"}
// ]

// export const getProducts = (categoryName = null) => {
//     const [products, setProducts] = useState([]);

//     const collectionRef = categoryName ?
//     query(collection(db, 'items'), where('category', '==', categoryName)) :
//     collection(db, 'items')

//     getDocs(collectionRef).then(response => {
//         const products = response.docs.map(doc => {
//             return { id: doc.id, ...doc.data() }
//         })
//     setProducts(products)
// });
//     return products;
// }
// export const getProduct = (id)=> {
//     return new Promise((resolve) => {
//         const prod = productos.find(p => p.id === id)
//         setTimeout(() => {
//             resolve(prod)
//         }, 1000)
//     })
// }
// export const getProductsByCategory = (categoryName)=> {
//     return new Promise((resolve) => {
//         const prod = productos.filter((productos)=> {return productos.marca === categoryName})
//         setTimeout(() => {
//             resolve(prod)
//         }, 1000)
//     })
// }
// export const getCategories = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(categories)
//         }, 1000)
//     })
// }
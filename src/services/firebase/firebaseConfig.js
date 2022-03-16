// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  getDocs, getDoc, doc, collection, query, where } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey, 
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const getCategories = () => {
    const collectionRef = collection(db, 'items')  
    const result = getDocs(collectionRef).then(response => {
      const categoryList = response.docs.map(doc => {
            return doc.data().brand;
          })

        return categoryList;
  })
  return result;
}

export const getProducts = (categoryName) => {
  const collectionRef = categoryName ?
  query(collection(db, 'items'), where('brand', '==', categoryName)) :
  collection(db, 'items');

  const result = getDocs(collectionRef).then(response => {
      const productos = response.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        return productos;
})
return result;
}

export const getProductById = (id) => {
  const docRef = doc(db, 'items', id);

  const result = getDoc(docRef).then(response =>{
    const product = {id: response.id, ...response.data()}
    return product;
  })
  return result;
}
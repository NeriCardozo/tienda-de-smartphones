// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  getDocs, getDoc, doc, collection, query, where } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTTJerNdLXWGrYJjPSxawTU9YydtZvPRM",
    authDomain: "tienda-de-smartphones-cardozo.firebaseapp.com",
    projectId: "tienda-de-smartphones-cardozo",
    storageBucket: "tienda-de-smartphones-cardozo.appspot.com",
    messagingSenderId: "203493812307",
    appId: "1:203493812307:web:a2a0bb382946650988bea6"
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
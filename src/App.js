import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import CartList from './components/CartList/CartList.js';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

function App() {
  
  document.title = "Tienda de Smartphones";
  return (
    <div className="App">
    <BrowserRouter >
    <CartContextProvider> 
    <NavBar />
    <Routes>

    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryName" element={<ItemListContainer />} />
    <Route path="/detail/:id" element={<ItemDetailContainer />} />
    <Route path= "/cart" element={<CartList /> } />
    <Route path="/checkout" element={<CheckoutForm />} />

    </Routes>
    </CartContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;

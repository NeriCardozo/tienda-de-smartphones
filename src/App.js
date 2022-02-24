import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

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
    <Route path= "/cart" element={<h1>Carrito</h1> } />

    </Routes>
    </CartContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;

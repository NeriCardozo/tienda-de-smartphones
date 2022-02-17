import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [route, setRoute]= useState({
    path: 'list',
    id: 1,
  })
  return (
    <div className="App">
    <BrowserRouter >
    <NavBar />
    <Routes>

    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryId" element={<ItemListContainer />} />
    <Route path="/detail/:id" element={<ItemDetailContainer />} />
    <Route path="/detail/:id" element={<h1>Hola</h1>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

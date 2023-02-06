import { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion';
import ItemListContainer from './components/BarraNavegacion/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
function App() {
  

  return (
    <BrowserRouter>
      <BarraNavegacion/>
        <Routes>
          <Route path='/' element={ <ItemListContainer saludo='soy item list container'/>}/>
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer saludo='soy item list container'/>}/>
          { /* los dos puntos son para indicar parametro */}
          <Route path='/detalle/:idProducto' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <CartContainer/> }/>  
          
          <Route path='*' element={ <Navigate to='/' /> }/> 
          {/* cuando pongo * significa cuando no esta en path, me redirecciona al to dentro del navigate*/}
        </Routes>
      <ItemCount/>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext.jsx';


function App() {
  
//estados
  return (
    <CartContextProvider>
    <BrowserRouter>
        <NavBar/>
        
          <Routes>
            <Route path='/' element={ <ItemListContainer />}/>
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer />}/>
            { /* los dos puntos son para indicar parametro */}
            <Route path='/detalle/:idProducto' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element={ <CartContainer/> }/>  
            
            <Route path='*' element={ <Navigate to='/' /> }/> 
            {/* cuando pongo * significa cuando no esta en path, me redirecciona al to dentro del navigate*/}
          </Routes>
          {/* <ItemCount/> */}
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App

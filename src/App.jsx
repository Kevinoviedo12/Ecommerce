import { useState } from 'react'
// import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion';
import ItemListContainer from './components/BarraNavegacion/ItemListContainer/ItemListContainer';
function App() {
  

  return (
    <>
      <BarraNavegacion/>
      <ItemListContainer saludo='soy item list container'/>
    </>
  )
}

export default App

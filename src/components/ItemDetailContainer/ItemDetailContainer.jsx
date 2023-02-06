import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { gFetch } from '../utils/gFetch';


const ItemDetailContainer = () => {

  const { idProducto}= useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(idProducto);
  useEffect (() => {
    if (idProducto) {
      gFetch()
      
      .then(res => {
        setProducto(res.find(p => p.id === idProducto))
        setLoading(false);
      }) 
      .catch(err => console.log(err));
  }else{
    gFetch()
    .then(res => {
      setProducto(res);
      setLoading(false);
    })
    .catch(err => console.log(err));
    }
  }, [idProducto]);

  if (loading) {
      return (
        <div className="d-flex justify-content-center">
        <div className="loading-circle">
          <div className="loading-inner-circle" />
        </div>
      </div>
      );
  }
  // return (
  //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //     <ProductoDetail productos={productos} />
  //     <ItemCount style={{ marginLeft: 'auto' }} />
  //   </div>
  // );


}

export default ItemDetailContainer

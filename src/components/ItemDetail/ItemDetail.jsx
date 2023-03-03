import React from 'react'
import { Link } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card-deck">
          <div
            key={productos.id}
            className="card mx-2"
            style={{ margin: "30px", display: "inline-block", width: "300px" }}
          >
            <div className="card-header text-center">{productos.name}</div>
            <div className="card-body text-center">
              <img
                src={productos.foto}
                alt="imagen"
                className="product-image w-100"
              />
            </div>
            <div className="card-body text-center">
              <Link to={`/categoria/${productos.categoria}`}>
                Categoria: {productos.categoria}
              </Link>
            </div>
            <div className="card-body text-center">
              <strong>ARS ${productos.price}</strong>
              <Link to={`/detalle/${productos.id}`}>
                <button className="btn btn-outline-primary w-100 mt-2">
                  Detalles
                </button>
              </Link>
            </div>
          </div>
      </div>
      
    </div>
    
  )
}

export default ItemDetail;

import React from "react";
import { Link } from "react-router-dom";

export const ItemCardContainer = ({ producto }) =>{
    return(
        <div key={producto.id} className="card w-25 mt-2">
            <div className="card-header">
                Nombre: {producto.name} 
            </div>
            <div className="card-body">
                <img src={producto.foto} alt="foto" className="w-100" />
            </div>
            <div className="card-footer">
                Categoria: {producto.categoria}<br/>
                Price: {producto.price}
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-outline-primary w-100">Detalle</button>
                </Link>
            
            </div>
        </div>
    )
}
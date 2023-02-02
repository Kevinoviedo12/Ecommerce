import React from "react";

export const ItemCardContainer = () =>{
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
            <button className="btn btn-outline-primary w-100">Detalle</button>
            </div>
        </div>
    )
}
import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";




 const ItemListContainer = ({saludo}) => {
    const [productos, setProducto] = useState([]);

    useEffect(() => {
    gFetch()
     .then(res=> {
        setProducto(res)
     })
     .catch(err =>  console.log(err) )
    }, [])

   
    console.log(productos);

    return(
        <ul>
           {productos.map(producto => 
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
           </div>)}
            
        </ul>
    );
}

export default ItemListContainer;
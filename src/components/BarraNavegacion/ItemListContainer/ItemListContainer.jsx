import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";
import {ItemCardContainer} from "../";



 const ItemListContainer = ({saludo}) => {
    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(true); //inicializo en true porque estoy cargando


    useEffect(() => {
    gFetch()
     .then(res=> {
        setProducto(res);
        //cada then debe hacer una sola cosa
     })
     .catch(err =>  console.log(err) )
     .finally(() => setLoading(false));// va al final
    }, [])

   
    console.log(productos);

    return(
        <center>
           { loading ? <h2>cargando...</h2>
            : 
           productos.map(producto => 
            <ItemCardContainer/>
          )}
            
        </center>
    );
}

export default ItemListContainer;
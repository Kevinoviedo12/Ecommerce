import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../utils/gFetch";
import {ItemCardContainer} from "../../ItemCardContainer/ItemCardContainer";
import { useParams } from "react-router-dom";



 const ItemListContainer = ({saludo}) => {
    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(true); //inicializo en true porque estoy cargando

    const {idCategoria} = useParams();
    useEffect(() => {
        if (idCategoria) {
            gFetch()
            .then(res=> {
                
               setProducto(res.filter(producto => producto.categoria == idCategoria));
               parseInt(idCategoria);
               //cada then debe hacer una sola cosa
            })
            .catch(err =>  console.log(err) )
            .finally(() => setLoading(false));// va al final
           
        }else {
        gFetch()
        .then(res=> {
            setProducto(res);
            //cada then debe hacer una sola cosa
        })
        .catch(err =>  console.log(err) )
        .finally(() => setLoading(false))// va al final
        }
    }, [idCategoria]) //aca va idcategoria para volver a llamar y me reenderice
   
    

   
    

    console.log(productos);

    return(
        
                loading 
                    ? 
                        <h2>cargando...</h2>
                    : 
                    <div style={{
                        display: 'flex',
                        flexDirection: 'rom',
                        flexWrap: 'wrap',
                    }}>
                        {
                            productos.map(producto => 
                            <ItemCardContainer key={producto.id} producto = {producto}/>
                        )}
                    
                    </div>  
            );
    }

export default ItemListContainer;
import React from "react";
import { BsCart } from "react-icons/bs"

export const CartWidget = ({ cartCounter }) => {
     return(
        <>
         <BsCart size='1.5rem'/>
         <span className="cart-counter">{cartCounter}</span>
        </>
        
     );
}

export default CartWidget;
import { createContext, useState } from "react";
export const CartContext = createContext() ;

function CartProvide({children}){
    let [cart, setCart] = useState([]);
    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvide;
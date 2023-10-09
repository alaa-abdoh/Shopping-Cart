import { createContext, useState } from "react";
export const cartContext = createContext() ;

function CartProvide({children}){
    let [cart, setCart] = useState([]);
    return(
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvide;
import { useState } from "react";

function Checkout(){
    let [isCheckout, setIsCheckout] = useState(false)
    return(
       <div className="checkout">
           {  
           isCheckout?
            <form>
                <h2>Checkout</h2>
                <input type="text" name="name" id="name" placeholder="Your name" />
                <input type="text" name="email" id="email" placeholder="Youe Email"/>
                <input type="submit" value="send" />
            </form>
            : <button className="check" onClick={()=>{setIsCheckout(!isCheckout)}}>CheckOut</button>
            }
       </div>
    )
}
export default Checkout;
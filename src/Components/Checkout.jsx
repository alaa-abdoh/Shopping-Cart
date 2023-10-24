import { useState } from "react";
import Swal from 'sweetalert2'
import { CartContext } from "../Context/CartProvide"; 
import { useContext} from "react";

function Checkout(){
    const [isCheckout, setIsCheckout] = useState(false);
    const {setCart} = useContext(CartContext);

    function handleSubmit(e){
        e.preventDefault();
        setIsCheckout(false);
        setCart([])
        Swal.fire({
            title: 'Sent',
            text: 'Your order was sent successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor:"#99dca8"
        })
    }
    return(
       <div className="checkout">
           {  
           isCheckout?
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <h2>Checkout</h2>
                <input type="text" name="name" id="name" placeholder="Your name" required />
                <input type="text" name="email" id="email" placeholder="Youe Email" required/>
                <input type="submit" value="send" />
            </form>
            : <button className="check" onClick={()=>{setIsCheckout(!isCheckout)}}>CheckOut</button>
            }
       </div>
    )
}
export default Checkout;
import { CartContext } from "../Context/CartProvide"; 
import { useContext} from "react";
import Swal from 'sweetalert2'
import Checkout from "./Checkout";

function Cart(){
    const {cart, setCart} = useContext(CartContext)

    function handleDelete(id){
        Swal.fire({
            title: 'Delete',
            text: 'Are you sure You want delete this item ?',
            icon: 'warning',
            confirmButtonText: 'Yes',
            confirmButtonColor:"#99dca8",
            showDenyButton:true,
            denyButtonColor:"red"
        }).then((obj)=>{
            if(obj.isConfirmed){
                setCart(
                    cart.filter((obj)=>obj.id != id)
                )
            }
        })
    }
    function calculateAmount(){
        const amount = cart.reduce((acc, ele)=> acc + ele.price,0);
        return amount.toFixed(3);
    }
    return(
        <div className="cart">
            <div className="container">
               {cart.length == 0 ? <h1>Your Cart is empty yet!</h1>:
                 <>
                <table>
                 <thead>
                     <tr>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Operation</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         cart.map((pro)=>{
                             return (
                                 <tr key={pro.id}>
                                    <td>{pro.title}</td>
                                    <td>{pro.category}</td>
                                    <td>{pro.price}</td>
                                    <td><button onClick={()=>{handleDelete(pro.id)}}>Delete</button></td>
                                 </tr>
                             )
                         })
                     }
                 </tbody>
                 <tfoot>
                    <tr>
                        <td style={{fontSize:"14px"}} colSpan='4'>Total Amount: <span style={{color:"red", fontSize:"20px"}}>${calculateAmount()}</span> </td>
                    </tr>
                 </tfoot>
             </table>
              <Checkout/>
                 </>
              }
            </div>
        </div>
    )
}
export default Cart;
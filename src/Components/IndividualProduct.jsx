import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../Context/CartProvide"; 
import { useContext } from "react";
import Swal from 'sweetalert2'

function IndividualProduct(props){
    let {cart} = useContext(cartContext)
    let {setCart} = useContext(cartContext)
    let {pro} = props;
    function handleClick(){
        setCart([...cart, pro]);
        Swal.fire({
            title: 'Added',
            text: 'The item added successfully to the cart',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor:"#99dca8"
        })
    }
    return(
        <div className="product">
            <div className="image"><img src={pro.image} alt="product image"/></div>
            <div className="productInfo">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <span>{pro.category}</span>
                <span>$ {pro.price}</span>
                <FontAwesomeIcon icon={faCartPlus} onClick={handleClick} className="addToCart" title="Add to cart"/>
            </div>
        </div>
    )
}
export default IndividualProduct;
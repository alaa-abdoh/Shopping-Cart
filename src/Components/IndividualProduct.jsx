import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function IndividualProduct(props){
    let [cart, setCart]= useState([]);
    let {pro} = props;
    function handleClick(){
        setCart([...cart, pro])
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
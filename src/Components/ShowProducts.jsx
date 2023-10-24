import IndividualProduct from "./IndividualProduct";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ShowProducts(){
   
      const [list, setList] = useState([])
      const [categoryNeeded, setCategoryNeeded] = useState("All")

      useEffect(()=>{
        const fetchData= async ()=>{
          const obj= await axios.get("https://fakestoreapi.com/products"); 
          setList(obj.data)
        }
        fetchData();
      })

    return(
        <>
            <Categories setCategoryNeeded={setCategoryNeeded} />
            <div className="products">
                <div className="container">
                    {
                        list.map(pro=>{
                            if(pro.category == categoryNeeded || categoryNeeded =="All" )
                                return <IndividualProduct key={pro.id} pro={pro}/>
                        })
                    }
                </div>
            </div>
            <div style={{postion:"relative", textAlign:"center", padding:"50px"}}>
                <Link to= "/products/cart" className="showCart" >Show Cart</Link>
            </div>
        </>
    )
}
export default ShowProducts;
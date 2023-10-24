import { useEffect, useState } from "react";
import axios from "axios";

function Categories(props){

    let [categories, setCategories] = useState(["All"])

    useEffect(()=>{
        const fetchData= async ()=>{
            const obj= await axios.get("https://fakestoreapi.com/products/categories");
            setCategories([...categories, ...obj.data])
        }
        fetchData()
    },[])
    return(
        <div className="categories">
           <div className="container">
                {
                    categories.map((cat)=>{
                        return <button key={cat} onClick={()=>{props.setCategoryNeeded(cat)}}>{cat}</button>
                    })
                }
           </div>
        </div>
    )
}
export default Categories;
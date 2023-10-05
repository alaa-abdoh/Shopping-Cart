function Categories(props){
    let categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"]
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
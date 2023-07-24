import React from "react";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options={
    edit:false,
    
};

const Product=({product})=>{
        if (!product || !product.images || product.images.length === 0) {
          return null; // Or return a loading message or placeholder component
        }
    return(
        <Link className="productCard" to={product._id}>
     <img src={product.images[0].url} alt={product.name}/>
     <p>{product.name}</p>
     <div>
        <ReactStars {...options} /> <span> (256 Reviews) </span>
        </div>
        <span>{product.price}</span>
        </Link>
    );   
};

export default Product;
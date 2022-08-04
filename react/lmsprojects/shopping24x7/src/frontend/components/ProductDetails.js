import '../css/ProductDetails.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

function ProductDetails(props) {

const [imageURL,setImageURL] = useState("../images/products/NI-Placeholder.png")

let params =useParams();

  useEffect(()=>{
    getProuctDetails();
  },[])

  async function getProuctDetails(){
    var requestURL = 'http://localhost:8080/api/v1/products/'+params.productId;
    await axios.get(requestURL)
    .then(response =>{
      console.log(response.data.product);
      props.setSelectedProduct(response.data.product);
      let url='.'+response.data.product.image;
      setImageURL(url);
    })
    .catch(error=> console.log(error));
  }

  function handleBuyNow(){

  }

  function handleAddToCart(){
    props.cart.push(props.selectedProduct);
    props.setCart(props.cart);
    props.setCartCount(props.cart.length);
  }

  return (
    <div className='productDetailsContainer'>
    <h3><b>{props.selectedProduct.category+' - '+props.selectedProduct.name}</b></h3>
      <div className='productImageContainer'>
          <img src={imageURL} alt=""></img>
      </div>
      <div className='productDetails'>
        <div className='prodcutDetailsSection1'>
          <p>Price:${props.selectedProduct.price-props.selectedProduct.discountPrice}  
            {props.selectedProduct.discountPrice>0 && <label>${props.selectedProduct.price}</label>}</p>
            <button className="btn btn-warning" id="“profile-delete-button" onClick={(event)=>{event.preventDefault();handleBuyNow()}}>Buy Now</button>
                <button className="btn btn-primary" id="profile-upload-button" onClick={(event)=>{event.preventDefault();handleAddToCart()}}>Add to Cart</button>
        </div>
        <div className='prodcutDetailsSection2'>
          <p>{props.selectedProduct.description}</p>
        </div>
          
      </div>
    </div>
  );
}

export default ProductDetails;

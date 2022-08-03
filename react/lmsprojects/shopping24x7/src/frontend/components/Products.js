import { useNavigate } from 'react-router-dom';
import '../css/Products.css';
import { useEffect, useState} from 'react';
import axios from 'axios';

function Products(props){
    const navigate = useNavigate();
    const [randomProductList, getRandomProductList] = useState('');
    
    useEffect(()=>{
        console.log('inside useEffect Products')
       //retreiveProducts();
    },[])

    const retreiveProducts = async () =>{
    await axios.get('http://localhost:8080/api/v1/homepage/products')
            .then(res =>{
                const randomProducts = res.data.products;
                getRandomProductList(randomProducts);
            }  )
            .catch(err => console.log(err))
    }

    const navigateToURL = (product) =>
    {
        alert('about to navigate');
        const path = 'Products/:'+product.id;
        alert(path);
    }
    const addtoCart = (product)=>{
        var productsArray = [];
        productsArray.push(product);
        console.log(productsArray);
        props.setCart(productsArray);
    }
    return( 
    <div className='productsContainer'>
        {!randomProductList && <p>Click on Categories to browse Products</p>}
        {randomProductList && randomProductList.map((product) => (
            <div key={product.id} className='productItem' onClick={()=> navigateToURL(product)}>
            <img key={Math.random()} src={product.image} alt=""></img>
            <p key={Math.random()}> {product.name}</p>
            <p key={Math.random()}>{product.price}</p>
            <button onClick={addtoCart(product)}> Add to Cart</button>
            </div>
        )
        )}
    </div>)
}

export default Products;
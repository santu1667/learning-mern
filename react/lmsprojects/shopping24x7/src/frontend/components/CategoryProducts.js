import '../css/CategoryProducts.css'
import {useEffect,useState} from 'react'
import axios from 'axios'

function CategoryProducts(props){
    const [productList,setProductList] = useState();
    const queryParams = new URLSearchParams(window.location.search);
    const categoryName = queryParams.get("categoryName");
    console.log(categoryName);

    useEffect(()=>{
        retreiveProductDetails();
    },[])

    const retreiveProductDetails =async ()=>{
        try{
            await axios.get('http://localhost:8080/api/v1/products')
            .then(res => {
                const productsList = res.data.products;
                setProductList(productsList)
            })
        }
        catch(err){
            console.log('Error occured while retreving Products')
        }
    }
    return(
        <>
        <div className='categoryContainer'>
            <div className='leftPanel'>
                <p>display</p>
            </div>
            <div className='categoryContent'>
                {productList && productList.map((product) => (
                <div key={Math.random()}>
                    <img key={Math.random()} src={product.image} alt=""></img>
                    <p key={Math.random()}> {product.name}</p>
                </div> 
                ))}
                <div></div><div></div>
            </div>
        </div>
        </>
    )
}

export default CategoryProducts;
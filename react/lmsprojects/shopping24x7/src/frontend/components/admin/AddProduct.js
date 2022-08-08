import { useEffect, useState } from 'react';
import '../../css/AddProduct.css';
import axios from 'axios';

function AddProduct() {
const [productName,setProductName] = useState('');
const [productDescription, setProductDescription] = useState('');
const [category, setCategory] = useState('');
const [price,setPrice] = useState(0);
const [discountPrice,setDiscountPrice] = useState(0);
const [isTopProduct,setIsTopProduct] = useState(false);
const [productImage,setIsProductImage]= useState('../images/products/NI-Placeholder.png');
const [errMsg,setErrMsg] = useState('');
const [successMessage, setSuccessMsg] = useState('');
var formData = new FormData();

useEffect(()=>{
    setErrMsg('');
    setSuccessMsg('');
},[productDescription,productName,price])

async function addProduct(){
    if(validateInput()){
        if(formData.has('productImage')){
            console.log('has Product Image');
        }
        formData.append('name',productName);
        formData.append('category',category);
        formData.append('price',parseInt(price));
        formData.append('discountPrice',discountPrice);
        formData.append('description',productDescription);
        formData.append('isTopProduct',isTopProduct);
        await axios.post('http://localhost:8080/api/v1/admin/products'
            , formData)
            .then(response=>{
                console.log(response);
                if(response.status===200){
                    setSuccessMsg('Product had been Created Successfully');
                    setProductDescription('');setPrice('');setProductName('');
                    setIsTopProduct(false);setIsProductImage('../images/products/NI-Placeholder.png');
                }
                })
    }
}

function validateInput(){
    if(!productName || !productDescription || !price || !category){
        setErrMsg('Mandatory Feilds are Missing');
    }
    return true;
}

function handleImageChange(event){
    if(event.target.files[0]){
        if(formData.has('productImage')){
            formData.delete('productImage');
            formData.append('productImage',event.target.files[0]);
            console.log('Adding Product Image to FormData if');
        }
        else{
            console.log('Adding Product Image to FormData ELse');
        formData.append('productImage',event.target.files[0]);}
        var createupdatedURL = URL.createObjectURL(event.target.files[0]);
        setIsProductImage(createupdatedURL);
    }
    
}

return (
    <>
    {(errMsg||successMessage) && <p className={errMsg? "addProductContainerErrorMsg":"addProductContainerSuccessMsg"}>
            {errMsg ? errMsg:successMessage}</p>}
    <div className="addProductContainer">
        <div className='productDetailsContainer'>
        <h5><b> Add New Product</b></h5>
            <div className="product-item">
                <label>Product Name</label>
                <input type="text" onChange={(e)=>setProductName(e.target.value)}></input>
            </div>
            <div className="product-item">
                <label>Category</label>
                <input type="text" onChange={(e)=>setCategory(e.target.value)}></input>
            </div>
            <div className="product-item">
                <label>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <div className="product-item">
                <label>Discount Price</label>
                <input type="text" value={parseInt(0)} onChange={(e)=>setDiscountPrice(e.target.value)}></input>
            </div>
            <div className="product-item">
                <label>Product Description</label>
                <input type="textarea" onChange={(e)=>setProductDescription(e.target.value)}></input>
            </div>
            <div className='product-image'>
                <label>Product Image</label>
                <input type="file"  multiple accept="image/*" onChange={handleImageChange}></input>
            </div>
            <div className="isTopProduct">
            <input type="checkbox" id="isTopProduct" value={isTopProduct} onChange={e=>setIsTopProduct(e.target.checked)}></input>
            <label className="isTopProduct">Is Top Product</label>
            </div>
            <button id="add-new-button" className='addProductButton' onClick={addProduct}>Add Product</button>
        </div>
        <div>
            <img src={productImage} alt="productname" />
        </div>
    </div>
    </>
);
}

export default AddProduct;
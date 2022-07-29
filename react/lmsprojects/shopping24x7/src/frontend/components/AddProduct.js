import '../css/App.css';


function AddProduct() {
  return (
    <div className="addProductContainer">
      <div className='productDetailsContainer'>
        <p><b> Add New Product</b></p>
        <div className="product-item">
            <label>Product Name</label>
            <input type="text"></input>
        </div>
        <div className="product-item">
            <label>Description</label>
            <input type="text"></input>
        </div>
        <div className="product-item">
            <label>Price</label>
            <input type="text"></input>
        </div>
        <div className="product-item">
            <label>Discount Price</label>
            <input type="text"></input>
        </div>
        <div className="product-item">
            <label>Product Description</label>
            <input type="textarea"></input>
        </div>
        <div className='product-image'>
            <label>Product Image</label>
            <input type="file"  multiple accept="image/*"/>
        </div>
        <div className="isTopProduct">
        <input type="checkbox" id="isTopProduct"></input>
        <label className="isTopProduct">Is Top Product</label>
        </div>
        <button className='addProductButton'>Add Product</button>
        </div>
        <div>
            <img src='https://picsum.photos/200' alt="" />
        </div>
    </div>
);
}

export default AddProduct;
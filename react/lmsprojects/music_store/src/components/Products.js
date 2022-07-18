import '../App.css';
import JSON from '../db.json';
import ProductListing from './ProductListing';
import {useState} from "react";

function Products() {
    console.log(JSON);

    const [products,SetProductsList] = useState(JSON);
  return (
    <div className="App">
      <h3>Products Page</h3>
      <ProductListing products={products}/>
    </div>
  );
}

export default Products;
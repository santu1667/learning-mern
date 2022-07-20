import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [products,setProducts] = useState([]);
  
  const getProducts = async () => {
    const productsList = await axios.get(`http://localhost:6700/products`).then(res=>res.data);
    setProducts(productsList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h4>Products List</h4>
      <br></br>
      <div class="productsContainer">
        {products &&
            products.map((item,i) => <div className="product" key={i}>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{item.type}</p>
                      <p>{item.description}</p>
                    </div>)}
        </div>
    </div>
  );
}

export default App;

import '../css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Cart from './Cart';
import LoginPage from './LoginPage';
import Department from './Department';
import Offers from './Offers';
import Logout from './Logout';
import AddProduct from './AddProduct';
import {useEffect, useState} from 'react';
import CategoryProducts from './CategoryProducts';
import ProductDetails from './ProductDetails';
import CheckoutPage from './CheckoutPage';
import OrdersPage from './OrdersPage';

function App() {
  const [orderMessage,setOrderMessage] = useState('');
  const [homeURL, setHomeURL] = useState('/login');
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] =useState([]);
  const [cartCount, setCartCount] =useState(0);
  const [selectedProduct,setSelectedProduct] = useState('');

  useEffect(()=>{
    var token = sessionStorage.getItem("auth-token");
    if(token != null && token !== ''){
      setHomeURL('/');
    }
  },[homeURL])

  return (
    <div>
      <Navbar url={homeURL} cartCount={cartCount} setHomeURL={setHomeURL} isAdmin={isAdmin}/>
      <div className="page-container">
          <div className="content-wrap">
            <Routes>
                <Route path='/login' element={<LoginPage setHomeURL={setHomeURL} />}></Route>
                
                <Route path='/' element={<Home cart={cart} setCart={setCart}
                  setCartCount={setCartCount} />}></Route>
                
                <Route path='/Profile' element={<Profile setIsAdmin={setIsAdmin}/>}></Route>
                
                <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}
                      setCartCount={setCartCount}  />}></Route>
                
                <Route path='/Department' element={<Department/>}></Route>
                <Route path='/AddProduct' element={<AddProduct/>}></Route>
                <Route path='/Offers' element={<Offers/>}></Route>
                
                <Route path='/Logout' element={<Logout setHomeURL={setHomeURL} setIsAdmin={setIsAdmin}
                        setCart={setCart}/>}></Route>
                
                <Route path='/products/:productId' element={<ProductDetails 
                  setSelectedProduct={setSelectedProduct} setCartCount={setCartCount} 
                  cart={cart} setCart={setCart} selectedProduct={selectedProduct}/>}></Route>
                
                <Route path='/Categories' element={<CategoryProducts setCartCount={setCartCount}
                cart={cart} setCart={setCart}/>}></Route>
                
                <Route path='/checkout' element={<CheckoutPage
                setOrderMessage={setOrderMessage} setCartCount={setCartCount} setCart={setCart}/>}></Route>

                <Route path='/orders' element={<OrdersPage orderMessage={orderMessage}/>}></Route>
            </Routes>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;

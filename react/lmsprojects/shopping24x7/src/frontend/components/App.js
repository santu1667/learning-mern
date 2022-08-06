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
import ManageProducts from './ManageProducts';
import ManageOrders from './ManageOrders';
import EditProduct from './EditProduct';

function App() {
  const [orderMessage,setOrderMessage] = useState('');
  const [homeURL, setHomeURL] = useState('/login');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [cart, setCart] =useState([]);
  const [cartCount, setCartCount] =useState(0);
  const [selectedProduct,setSelectedProduct] = useState('');

  useEffect(()=>{
    var token = sessionStorage.getItem("auth-token");
    if(token != null && token !== ''){
      setHomeURL('/');
    }
    if(sessionStorage.getItem("role")==="Admin"){
      setIsAdmin(true);
    }
  },[homeURL])

  return (
    <div>
    <Navbar url={homeURL} cartCount={cartCount} setHomeURL={setHomeURL} isAdmin={isAdmin}
    isUserLoggedIn={isUserLoggedIn}/>

    <div className="page-container">
    <div className="content-wrap">
      <Routes>
        <Route path='/login' element={<LoginPage setHomeURL={setHomeURL} />}></Route>
        
        <Route path='/' element={<Home cart={cart} setCart={setCart}
          setCartCount={setCartCount} />}></Route>
        
        <Route path='/Profile' element={<Profile isAdmin={isAdmin} setIsAdmin={setIsAdmin}
        setIsUserLoggedIn={setIsUserLoggedIn}/>}></Route>
        
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}
              setCartCount={setCartCount}  />}></Route>
        
        <Route path='/Department' element={<Department/>}></Route>

        <Route path='/admin/add-new-product' element={<AddProduct/>}></Route>

        <Route path='/admin/products' element={<ManageProducts 
          setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>}></Route>

        <Route path='/admin/products/:product_id/edit' element={<EditProduct
        setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>}> </Route>
        
        <Route path='/admin/orders' element={<ManageOrders/>}></Route>

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
    <Footer isAdmin={isAdmin}/>
    </div>
  );
}

export default App;

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

function App() {

  const [homeURL, setHomeURL] = useState('/login');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(()=>{
    var token = sessionStorage.getItem("auth-token");
    if(token != null && token !== ''){
      setHomeURL('/');
    }
  },[homeURL])

  return (
    <div>
      <Navbar url={homeURL} setHomeURL={setHomeURL} isAdmin={isAdmin}/>
      <div className="page-container">
          <div className="content-wrap">
            <Routes>
                <Route path='/login' element={<LoginPage setHomeURL={setHomeURL} />}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Profile' element={<Profile setIsAdmin={setIsAdmin}/>}></Route>
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/Department' element={<Department/>}></Route>
                <Route path='/AddProduct' element={<AddProduct/>}></Route>
                <Route path='/Offers' element={<Offers/>}></Route>
                <Route path='/Logout' element={<Logout setHomeURL={setHomeURL} setIsAdmin={setIsAdmin}/>}></Route>
            </Routes>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;

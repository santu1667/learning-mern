import '../css/Cart.css';
import {useEffect,useState} from "react"
import { Link } from "react-router-dom";

function Cart(props) {
  const[isUserLogged, setUserLoggedIn] = useState(false);

  useEffect( ()=>{
    var token = sessionStorage.getItem("auth-token");
    if(token != null && token !== ''){
    setUserLoggedIn(true);
  }
  },[isUserLogged])
  

  return (
    <>{isUserLogged &&
      <div className="cartContainer">
        <p><b> Cart</b></p>
        <div className="cartItems">
          <div className="cartDescription">
            <span> 1 X SmartPhone</span>
            <label>Price $1000</label>
            <label>Discount $200</label>
          </div>
            <label className="cartPrice"> $800</label>
        </div>
        <hr/>
        <div className="cartCheckout">
          <p>Grand Total $800</p>
          <button className="addProductButton" type="submit">Checkout</button>
        </div>
      </div>}

      {!isUserLogged && 
          <div className="profileLogin">
            <p> Please <Link to="/login">Login</Link> to view Your Cart</p>
          </div>
        }
      </>
  );
}

export default Cart;
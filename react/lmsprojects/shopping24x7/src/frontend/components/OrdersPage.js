import { useEffect,useState } from 'react';
import '../css/OrdersPage.css';
import { Link } from "react-router-dom"


function OrdersPage(props) {
    const [isUserLoggedIn,setUserLoggedIn] = useState(false);

    useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setUserLoggedIn(true);
    }
    },[])

return (
    <div className='ordersContainer'>
        <h3>Your Orders</h3>
        <div className='orderDetails'>
            <p>{props.orderMessage}</p>
            {!isUserLoggedIn && <p>Please Login <Link to="/login">Account</Link> or Create New Account to view all of your orders</p>}
        </div>
    </div>
);
}

export default OrdersPage;
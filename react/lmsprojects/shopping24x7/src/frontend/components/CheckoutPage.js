import axios from 'axios';
import { useEffect,useState,useRef } from 'react';
import '../css/CheckOutPage.css';
import {useNavigate} from 'react-router-dom';


function CheckoutPage(props) {
const cartItems = props.cart;
const [user,setUser] =useState();
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [city,setCity] = useState('');
const [email,setEmail] = useState('');
const [zipCode,setZipCode] = useState('');
const [state,setState] = useState('');
const [streetAddress,setStreetAdress]= useState('');
const navigate = useNavigate();
const [errMsg, setErrMsg] =useState('');
const errRef = useRef(); 

const [isUserLoggedIn, setUserLoggedIn] = useState(false);
useEffect(()=>{
    if(sessionStorage.getItem('token')!=null){
        setUserLoggedIn(true);
        setUser(sessionStorage.getItem("user"));
    }
},[])

const placeOrder = async ()=>{
    if(validateInputFeilds()){
        alert('Inside');
    var req= getPlaceOrderRequest();
    // await axios.post('http://localhost:8080/api/v1/checkout',req)
    // .then(response =>{props.setOrderNo("You Order had been Placed Sucessfully");
    //                 navigate('/orders')})
    // .catch(err => {console.log(err);
    //             setErrMsg('Error Occured while placing Order')})
    }
}

function validateInputFeilds(){
    console.log('firstName'+firstName+'lastName'+lastName+'email'+email);
    console.log('streetAddress'+streetAddress+'city'+city+'zip'+zipCode+'state'+state)
    if(!firstName || !lastName || !email ){
        setErrMsg('Please enter User details');
        return false;
    }
    if(!streetAddress || !city || !state || !zipCode){
        setErrMsg('Please enter Shipping details');
        return false;
    }
}

function getPlaceOrderRequest(){
    let req,user,cart = '';
    if(sessionStorage.getItem('user')){
        user = {firstName:firstName,lastName:lastName,email:email,
                    shippingAddress:streetAddress+city+state+zipCode};}
    else{
        var loggedInUser = sessionStorage.getItem('user');
        user = {firstName:loggedInUser.firstName,lastName:loggedInUser.lastName,
            email:loggedInUser.email,shippingAddress:streetAddress+city+state+zipCode};
    }
    cart = 
    req={user:user,cart:cart}
    return req;
}

return (
    <div className='checkOutPageContainer'>
        {errMsg &&
        <p ref={errRef} className={errMsg ? "errmsg" : ""}>{errMsg}</p>}
        <h4> User Info</h4>
        {isUserLoggedIn &&
            <div className='checkOutPageUserDetails'>
                <label htmlFor='UserName'>User</label>
                <p id='UserName'>{user.firstName +' '+user.lastName}</p>
                
                <label htmlFor='email'>Email : </label>
                <p id='email'>{user.email}</p>
            </div>
        }
        {!isUserLoggedIn && 
            <div className='checkOutPageUserDetails'>
                <label htmlFor='firstName'>FirstName</label>
                <input type="text" id='firstName' onChange={(e)=>setFirstName(e.target.value)}></input>
                
                <label htmlFor='lastName'>lastName</label>
                <input type="text" id='lastName' onChange={(e)=>setLastName(e.target.value)}></input>

                <label htmlFor='email'>Email : </label>
                <input type="text" id='email' onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
        } 
        <div className='shippingAddressContainer'>
            <h4> Shipping Address Info</h4>
            <label htmlFor='streetAddress'>Street Address</label>
            <input type="text" id='streetAddress' onChange={(e)=>setStreetAdress(e.target.value)}></input>
            <div className='shippingAddressSection1'>
                <label htmlFor='city'>City</label>
                <input type="text" id='city' onChange={(e)=>setCity(e.target.value)}></input>

                <label htmlFor='zip'>ZipCode : </label>
                <input type="text" id='zip' onChange={(e)=>setZipCode(e.target.value)}></input>

                <label htmlFor='state'>State : </label>
                <input type="text" id='state' onChange={(e)=>setState(e.target.value)}></input>
            </div>
            <button className="btn btn-warning" onClick={(event)=>{
                event.preventDefault();placeOrder()}}>PlaceOrder</button>
        </div>
    </div>
);
}

export default CheckoutPage;
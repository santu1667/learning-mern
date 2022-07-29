import '../css/Profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'react-bootstrap';
import { useEffect, useState, useRef} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Profile() {
  const [isAddressDisplayable, setIsAddressDisplayable] = useState(true);
  const [isUserLogged,setUserLogged] = useState('');
  const [streetAddress, setStreestAddr] =useState('No Address');
  const [zipcode, setZipCode] = useState('');
  const [state,setState] = useState('');
  const [city,setCity] =useState('');
  const [user, setUser] = useState('');
  const [errMsg, setErrMsg] = useState(null);
  const errRef = useRef();
  const hiddenFileInput = useRef(null);

  function onImageChange(){
    alert('You are uploading a new Image')
  }

  function displayAddressForm(){
    setIsAddressDisplayable(!isAddressDisplayable);
  }

  const saveAddressDetails = async ()=>{
    setErrMsg('');
    try{
        var req= {streetAddress:streetAddress,city:city,zipcode:zipcode,state:state}
      //var response =  await axios.get('http://localhost:8080/api/v1/profile', req)
        console.log(req);
        setIsAddressDisplayable(!isAddressDisplayable);
        console.log(user);
        var address = streetAddress +', '+city+', '+state+', '+zipcode;
        user.address = address;
        setUser(user);
      }
      catch(exception){
        console.log('Exception  happened while retreving user details');
      }
    
    
  }

  useEffect( () => {
    console.log('inside useEffect');
    var token = sessionStorage.getItem("auth-token");
    if(token != null && token !== ''){
      setUserLogged(true);
      getUserDetails(token);
    }
    else{
      setUserLogged(false);
    }
  },[])

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleDelete = event => {
    hiddenFileInput.current.click();
  };

  async function getUserDetails(token){
    try{
    var response =  await axios.get('http://localhost:8080/api/v1/profile',
          {headers: {
            'token': token,
            'Content-Type': 'application/json'
          }})
          var profile = response.data.profile;
          setUser({
            firstName : profile.firstName,
            lastName : profile.lastName,
            email : profile.email,
            role : profile.role,
            phoneNumber : profile.phoneNumber ? profile.PhoneNumber:"No Record",
            address : profile.address ? profile.address.streetAddress+', '
                                + profile.address.city+', '
                                + profile.address.state+', '
                                + profile.address.zipcode :"No Address Available",
          })
          sessionStorage.setItem('user',JSON.stringify(profile));
          sessionStorage.setItem("role",user.role);
        }
    catch(exception){
      console.log('Exception  happened while retreving user details');
      setErrMsg("Error Occured While retreiving Profile");
      return;
    }
    
  }
  

  return (
    <>
    {isUserLogged &&
      <div className="profileContainer">
        <p ref={errRef} className={errMsg ? "errmsg" : ""}>{errMsg}</p>
        <Container>
          <Row>
            <Col xs={3}>
              <img id="profile-image" src='https://picsum.photos/200' alt="" /><br/>
              <div className="imageButtons">
              <button className="btn btn-warning" id="delete-image" onClick={handleDelete}> Delete</button>
              <button className="btn btn-primary" id="upload-image" onClick={handleClick}> Upload</button>
              </div>
              <input type="file"  ref={hiddenFileInput} multiple accept="image/*" 
                style={{display: 'none'}} onChange={onImageChange} />
            </Col>
            <Col className="nameDetails">
              <Row>
                <Col xs={3}>
                  <label htmlFor='profile-first-name'>First Name</label><br/>
                  <span  id="profile-first-name" >{user.firstName}</span>
                </Col>
                <Col xs={6}>
                <label htmlFor='profile-last-name'>Last Name</label><br/>
                  <span id="profile-last-name">{user.lastName}</span>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                <label htmlFor='profile-email-name'>Email</label><br/>
                  <span id="profile-email-name">{user.email}</span>
                </Col>
                { !isAddressDisplayable &&
                  <Col xs={3}>
                  <label>Phone</label><br/>
                  <span>{user.phoneNumber}</span>
                  </Col> 
                }
                { !isAddressDisplayable &&
                    <Col xs={6}>
                    <label>Interests</label><br/>
                      <span>Apple, Samsung, Laptops</span>
                    </Col>
                }
              </Row>
              { isAddressDisplayable &&
              <Row>
                <Col xs={6}>
                <label>Phone</label><br/>
                  <span>{user.phoneNumber}</span>
                </Col>
              </Row> }
              { isAddressDisplayable &&
              <Row>
                <Col xs={6}>
                    <label>Interests</label><br/>
                      <span>Apple, Samsung, Laptops</span>
                    </Col>
              </Row> }
              {isAddressDisplayable &&
              <Row>
                <Col xs={7}>
                <label>Address</label><br/>
                  <span>{ user.address}</span>
                </Col>
                <Col xs={3}>
                <button type="button" id="address-edit-button"
                className="btn btn-primary" onClick={displayAddressForm}> Edit</button>
                </Col>
              </Row>}
              {!isAddressDisplayable &&
              <Row>
                <form className="updateAddressForm">
                <Row></Row>
                <Row>
                <Col><span>Update Address</span></Col>
                <Col></Col>
                </Row>
                <Row>
                <Col xs={2}><label>Street Address</label></Col>
                <Col xs={7}><input type="text" className="form-control"
                    onChange={(e)=>setStreestAddr(e.target.value)}></input></Col>
                </Row>
                <Row>
                <Col xs={2}><label>City</label></Col>
                <Col xs={7}><input type="text" className="form-control"
                  onChange={(e)=>setCity(e.target.value)}></input></Col>
                </Row>
                <Row>
                <Col xs={2}><label>State</label></Col>
                <Col xs={7}><input type="text" className="form-control"
                  onChange={(e)=>setState(e.target.value)}></input></Col>
                </Row>
                <Row>
                <Col xs={2}><label>Zip</label></Col>
                <Col xs={7}><input type="text" className="form-control"
                  onChange={(e)=>setZipCode(e.target.value)}></input></Col>
                <Col><button type="button" className="btn btn-primary" 
                onClick={saveAddressDetails}>   Save</button></Col>
                </Row>
                
                </form>
              </Row>}
            </Col>
          </Row>
        </Container>
        </div>
        }

        {!isUserLogged && 
          <div className="profileLogin">
            <p ref={errRef} className={errMsg ? "errmsg" : ""}>{errMsg}</p>
            <p> Please <Link to="/login">Login</Link> to view Your Profile</p>
          </div>
        }
        </>
);
} 
  

export default Profile;
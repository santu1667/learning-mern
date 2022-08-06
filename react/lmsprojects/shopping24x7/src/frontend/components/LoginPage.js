import '../css/LoginPage.css';
import { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const description=   "Shop24x7 is online store which allows users to Create online orders." 
                      +"We had few stores available in person in TX. Customers who register "
                      +"can earn additional points and use them towards purchase. Happy Shopping!!";
  const userRef = useRef();
  const errRef = useRef();             
  const [user, setUser] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showSignUpForm, setShowSignUpForm] =useState(false);
  const [successMessage, setSuccessMsg] =useState(null);
  let navigate = useNavigate();
                  
 //Calling API After Input Validations
  const  loginUser =async () =>{
    if(validateInput()){
    let req={username:user,password:pwd};
    if(errMsg == null || errMsg === ''){
        try{
        var response =await axios.post('http://localhost:8080/api/v1/users/login', 
                req)
        }
        catch(exception)
        {
          console.log(exception);
          if(exception.response.status === 400){
            console.log('Setting error message'); setErrMsg(exception.response.data.message)}
        }
      if(response.status===200) { 
          sessionStorage.setItem("auth-token",response.data.accesstoken)
          props.setHomeURL('/');
          navigate('/Profile');
        }
      }
    }
  }

  const registerUser= async ()=>{
    alert('inisde registerUser');
    if(validateRegisterUserInput()){
      let req={firstName:firstName, lastName:lastName,password:password,email:email};
      if(errMsg == null || errMsg === ''){
        userRef.current.value='';
        try{
        var response =await axios.post('http://localhost:8080/api/v1/users/register', 
                req)
        console.log(response);
        }
        catch(exception)
        {
          console.log(exception);
          if(exception.response.status === 400){
            console.log('Setting error message'); setErrMsg(exception.response.data.message)}
        }
        if(response.status===200) { 
          setFirstName('');setLastName('');setEmail('');setPassword('')
          setSuccessMsg(response.data.message);
      }
    }
  }
  }

  function checkPasswordMatch(confirmPwd){
    if(!password === confirmPwd){
      setErrMsg('Password and Confirm Password didnt matched');
    }
  }
  /*
   * Validate Input  - Check for Null Values
   * Password should be minimum 8 chars
   */
  function validateInput(){
    alert ('user: '+user+' pwd : ' +pwd);
    if(!user){ setErrMsg("Please enter User Name");  return false;  }
    if(!pwd){ setErrMsg("Please enter Password");       return false;  }
    if(pwd.length<8){setErrMsg("Password Should be minimum 8 chars"); return false;}
    return true;
  }
  
  function validateRegisterUserInput(){
    console.log('validateRegisterUserInput'+firstName+lastName+email+password)
    if(!firstName){ setErrMsg("Please enter First Name"); return false;    }
    if(!lastName){setErrMsg("Please enter Last Name");  return false;    }
    if(!email){setErrMsg("Please enter email"); return false;    }
    if(!password){setErrMsg("Please enter Password"); return false;}  
    else if(password.toString().length<8){
            setErrMsg("Password Should be minimum 8 chars"); return false;    }
    return true;
  }

  // Set showSignUpForm to toggle  Create User and Sign In forms
  function displaySignUpForm(){
    setShowSignUpForm(!showSignUpForm);
    setErrMsg('');
    setSuccessMsg('');
    userRef.current.value = '';
  } 

  // To display password on click on eye(show password)
  function showPassword(){
    setPasswordShown(!passwordShown);
  }
  
// Clear Error Message after updating user, pwd
  useEffect(() => {
    console.log('Setting Error Message to empty');
    setErrMsg('');
}, [user, pwd,firstName,lastName,password,email])
    
  // UI Form 
  return (
    <div className="loginContainer">
      <p className="websiteDescription"><b style={{color:'green'}}>Welcome to Shop 24x7</b> {<br/>} 
      {description}</p>
      <section>
      
      { !showSignUpForm &&
      <div>
      <p ref={errRef} className={errMsg ? "errmsg" : ""}>{errMsg}</p>
      <form className="signInForm" onClick={(event)=>event.preventDefault()}>
        <h2>Login</h2>
        <label htmlFor="login-email">Username:</label>
        <input  type="text" id="login-email" ref={userRef} autoComplete="off" 
          onChange={(e) => setUser(e.target.value)} required/>
        <label htmlFor="login-password">Password:</label>
        <input type={passwordShown ? "text" : "password"} ref={userRef} id="login-password" 
        onChange={(e) => setPwd(e.target.value)} required/>
        <i className="far fa-eye toggle-eye" id="togglePassword" onClick={showPassword} ></i>
        <button className='signInFormButton' id="login-submit"
                                            onClick={loginUser}>Sign In</button>
      </form> 
        <span className="needAccountSpan">Need an Account?
        <button className='signupButton' onClick={displaySignUpForm}>Sign Up</button>
        </span>
      </div>
      }
      
      { showSignUpForm &&
      <div>
      <p ref={errRef} className={errMsg ? "errmsg" : "successmsg"}>
        {successMessage} {successMessage && 
                  <button className="loginButton" onClick={displaySignUpForm}>Login</button>}
          {!successMessage && errMsg}
      </p>
      <form className="signupForm" onClick={(event)=>event.preventDefault()}>
        <h2>Create Account</h2>
        <label htmlFor="register-first-name">FirstName:</label>
        <input  type="text" id="register-first-name" ref={userRef} autoComplete="off" 
          onChange={(e) => setFirstName(e.target.value)}/>

        <label htmlFor="register-last-name">LastName:</label>
        <input type="text" ref={userRef}  id="register-last-name" 
        onChange={(e) => setLastName(e.target.value)} required/>

        <label htmlFor="register-email">Email:</label>
        <input type="text" ref={userRef}  id="register-email" 
        onChange={(e) => setEmail(e.target.value)} required/>

        <label htmlFor="register-password">Password:</label>
        <input type={passwordShown ? "text" : "password"} id="register-password" ref={userRef} 
        onChange={(e) => setPassword(e.target.value)} required/>
        <i className="far fa-eye toggle-eye" id="togglePassword" onClick={showPassword} ></i>

        <label htmlFor="register-confirm-password">Confirm Password:</label>
        <input type={passwordShown ? "text" : "password"} id="register-confirm-password" 
        ref={userRef} onChange={(e) => checkPasswordMatch(e.target.value)} required/>
        <i className="far fa-eye toggle-eye" id="togglePassword" onClick={showPassword} ></i>

        <button className="registerButton" id="register-submit" onClick={registerUser}>Register</button>
      </form>
        <span className="hadAccountSpan">Already had account
        <button className="loginButton" onClick={displaySignUpForm}>Login</button>
        </span>
      </div> }
      
      </section>
    </div>
  );
}

export default LoginPage;

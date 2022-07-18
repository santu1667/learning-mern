import './App.css';
import {useState} from "react";

function App() {

  var [errorMessage, seterrorMessage] = useState(' ');
  var [username, setusername] = useState('Admin');

  function myChangeHandler(event){
    let nam = event.target.name; 
    let val = event.target.value; 
    
    let err = ''; 
    if (nam === "roll_no"){
      if (val !=="" && !Number(val)) 
      { err = <strong>Your roll_no must be a number</strong>; }
    }
    else
    {setusername(val);}
    seterrorMessage(err);
  }

  return (
    <div className="App">
     <form> 
      <h1>Hello {username} </h1>
       <p>Register your name:</p> 
       <input type='text' name='username' onChange={myChangeHandler} /> 
       <p>Enter your roll_no:</p> 
       <p>{errorMessage}</p>
       <input type='text' name='roll_no' onChange={myChangeHandler} />
        
     </form>
    </div>
  );
}

export default App;

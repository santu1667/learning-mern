import './App.css';
import logo from './logo.svg';

function Welcome({user}) {
  
  return (
   <div className='App'>
    <img src={logo} className="App-logo" alt="logo" />
   <p>Welcome, {user} : Props Ex -> user 'Santosh' passed from App - Welcome </p>
   <div>This Message is from welcome.js File included in App JS</div>
   </div>
  );
 
 

}



export default Welcome;

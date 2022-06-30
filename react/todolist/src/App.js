import './App.css';
import logo from "./logo.svg";
import {useState} from 'react';

function App() {
  var [buttonCount,setButtonClickedCount] = useState(0);
  var [a,setCount] = useState(0);
  const b=2;
  var c= a*b;
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"></img>
        <h2>Learn React App</h2>
        <p>Button Clicked for {buttonCount} times</p>
        <button onClick={() => setButtonClickedCount(buttonCount+1)}>Click Me</button>
        <p>The value of c is {a}*{b} = {c} </p>
        <button onClick={() => setCount(a+1)}>Click Me</button>
    </div>
  );
}

export default App;

import './App.css';
import React, {useEffect, useState} from "react";
import Content from './Content';

function App() {

  const [data,setData] = useState(0);
  function incrementValue(){
    setData(data+1);
  }

//  useEffect( ()=>{
//   console.log('use effect called');
//   return()=>
//  }
//  )
  
  return (
    
    <div className="App">
       <button onClick={incrementValue}>This is the button</button>
       <Content id="counter" number={data}></Content>
    </div>
  );
}

export default App;

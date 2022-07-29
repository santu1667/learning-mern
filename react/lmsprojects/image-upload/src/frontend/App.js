import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [name,setName] = useState('');
  const [file,setFile] = useState('');

function send(event){
      const data = new FormData();
      data.apppend ("name",name);
      data.append("file", file);

  }
  return (
    <div className="App">
     <form>
      <div>
        <label htmlFor="name">Name </label>
        <input type="text" id="name" onChange={event =>{
           const {value} =event.target;
          setName(value)
          }}></input>
      </div>
      <div>
        <label htmlFor="file"> File</label>
        <input type="file" id="file" onChange={(event)=>{
           const {file} =event.target.files[0];
           setFile(file)}}></input>
      </div>
      <button onClick={send}>Send</button>
     </form>
    </div>
  );
}

export default App;

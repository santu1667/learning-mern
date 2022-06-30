import "./App.css";
import React from "react";

const { useEffect, useState } = React;

function Search() {
const fruits =["Apple","Mango","Orange","Guava","Pomo"];
  const [fruitsArray, setFruitsArray] = useState(fruits);

  useEffect(() => {
    console.log(`Hi you clicked times`);
  },);

  return (
    <div className="App">
      <input type="text" id="keyword" name="keyword" onChange={(keyword)=>setFruitsArray(fruits.filter(keyword))}></input>
      <div><p>{fruitsArray}</p></div>
    </div>
  );
}

export default Search;
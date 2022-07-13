import React from "react";

const {useState, useEffect} = React;

function  CounterWithNameandEffect({user}){

    const [count,setCount] = useState(0);

    /*
    *use Effect will be triggered on each refresh and first render
    *The Array is provided as if one of the objects inside array changes helps execute when user or count 
    update*/
    useEffect( () => {
        console.log(`Hi ${user}, You Clicked ${count} times.`);
    },[user,count])

    return(
        <div className="App">
            <p>useEffect : You clicked button {count} times</p>
            <p>Also check console(F12) to see useEffect usage</p>
            <button onClick={()=>setCount(count+1)}>Test Button</button>
        </div>
    )
}

export default CounterWithNameandEffect;
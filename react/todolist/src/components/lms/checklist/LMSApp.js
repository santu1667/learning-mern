import LMStodoCheckList from "./LMStodoCheckList";
import LMSAddTodo from "./LMSAddtodo";
import React, {useState}  from 'react';
import './LMSApp.css';

function LMSApp(){

    const [todos, setTodoList]=useState([
        'Car','Bike','Cycle','Jeep'
    ])
    return(
        <div className='App'>
            <LMStodoCheckList todo={todos} setTodoList={setTodoList}/>
            <LMSAddTodo setTodoList={setTodoList}/>
        </div>
    )
}

export default LMSApp;
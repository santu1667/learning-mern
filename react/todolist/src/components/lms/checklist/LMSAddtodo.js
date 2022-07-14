import './LMSApp.css';

import {useRef} from 'react';


function LMSAddTodo({setTodoList}) {
    // this holds the intial state of referred value
    const inputRef = useRef();
    console.log(`List : ${setTodoList}`);

    function handleAddtodo(event){
        event.preventDefault(); //prevent default behavior
        //event.target.elements gives all form elements
        // if a name property is added to input another array element is created with name
        console.log(event.target.elements);
        const todo = event.target.elements.todo.value;

        // function updateTodos(preTodos){
        //     return preTodos.concat(todo);
        // }

        // setTodoList(updateTodos());

        setTodoList((preTodos) =>{
            return preTodos.concat(todo)
        });

        inputRef.current.value = '';
    }

    return(
        <form onSubmit={handleAddtodo}>
            <input name="todo" placeholder='Add todo' ref={inputRef}></input>
            <button type="Submit">Add</button>
        </form>
    )
}

export default LMSAddTodo;
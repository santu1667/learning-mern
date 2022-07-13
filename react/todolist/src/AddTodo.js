import './App.css';
import {useRef} from 'react';


function AddTodo({setTodoList}) {
    // this holds the intial state of referred value
    const inputRef = useRef();

    function handleAddtodo(event){
        event.preventDefault(); //prevent default behavior
        //event.target.elements gives all form elements
        // if a name property is added to input another array eement is created with name
        console.log(event.target.elements);
        const test = event.target.elements.todo.value;
        const todo = {
            id:Math.random(),
            text:test,
            done :false
        }
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

export default AddTodo;
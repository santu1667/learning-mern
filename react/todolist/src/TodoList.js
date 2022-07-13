import './App.css';

function TodoList({todos, setTodoList}){

    function handleToggleTodo(todo)
    {
        const updatedTodos = todos.map((t) => 
            t.id === todo.id
            ?{
                ... t,
                done: !t.done,
            }
            :t
        );
        setTodoList(updatedTodos);
    }

    if(!todos.length){
        return(
            <div>
                <h1>To do List</h1>
                <p> All Todo's deleted! Add a Todo</p>
            </div>
        )
    }

    return(
    <div>
        <h1>To do List</h1>
        <ul>
            {todos.map(todo => (
                <li onDoubleClick= {()=> handleToggleTodo(todo)}
                style={{textDecoration: todo.done ? "line-through":''}}
                    key={todo.id}>
                                {todo.text}
                                <DeleteTodo todo={todo} setTodoList={setTodoList}/>
                </li>
            ))}
        </ul>
    </div>
    );
}

function DeleteTodo({todo, setTodoList}){

    function handleDeleteTodo(){
        const confirmed = window.confirm("Are you sre you want to delete this? ")
        if(confirmed)
        {
            setTodoList((prevTodos) => {
                return prevTodos.filter((t) => t.id !== todo.id);
              });
        }
    }
    return(
        <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      x
    </span>
  );
}

export default TodoList;

import Welcome from './Welcome';
import './App.css';
import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Example from './Example';
import CounterWithNameandEffect from './CounterWithNameandEffect';
import SearchFilterDemo from './SearchFilterDemo';
import Checklist from './Checklist';

function App() {
  console.log('test');
  const [count,setCount] = useState(0);
  //const [a,setA] = useState(0);
  const [animals,setAnimals]=useState(["dog","cat","horse","meow"]);
  const [todos, setTodoList]= useState([
    {id:1, text:"Wake up at 6 AM", done:true},
    {id:2, text:"Get Ready by 6.30 AM", done:false},
    {id:3, text:"Do exercise for 30 min", done:false},
    {id:4, text:"Get Ready for office", done:false}
  ])
  //const b=5;
  return (

    <div className="App">
    <Routes>
        <Route exact path="/" element={<Welcome user={"Santosh"} />} />

        <Route exact path="/search" element={<SearchFilterDemo />} />

        <Route
          exact
          path="/counter"
          element={
            <>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
            </>
          }
        />

        <Route
          exact
          path="/counterWithNameAndSideEffect"
          element={<CounterWithNameandEffect user={"Santosh"} />}
        />

<Route exact
          path="/customcomponent"
          element={
            <>
              <Example animals={animals} setAnimals={setAnimals}/>
            </>
          }
        ></Route>

        <Route exact
          path="/todolist"
          element={
            <>
              <TodoList todos={todos} setTodos={setTodoList} />
              <AddTodo setTodoList={setTodoList} />
            </>
          }
        ></Route>

      <Route  exact path="/checkList" element={<Checklist/>}/>
      </Routes>
       
    </div>
  );
}

// function TodoList(){
//   return(
//   <div className="App">
//       <h1>To do List</h1>
//   </div>
//   );
// }

export default App;

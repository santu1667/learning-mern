import {createStore} from "redux";
import Test from './Test';
import {Provider} from "react-redux";

const value=5;

const reducer = (state=value,action) =>{
   switch(action.type){

    case "INCREMENT":
        return state+ action.payload;
    case "DECREMENT":
        return state- action.payload;    
    default:
        return state;
   }
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log("Current State " +store.getState());
})

function App(){
    return(
        <Provider store={store}>
        <Test />
        <p> Printing state value in Parent {value}</p>
        </Provider>
    )

    
}


export default App;
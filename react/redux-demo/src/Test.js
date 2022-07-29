import {useSelector, useDispatch} from "react-redux";

function Test(){
        const counter  = useSelector(state => state);
        const dispatch =useDispatch();
        const increment = {type:"INCREMENT",payload:1};
    return(
        <div>
            <p> Printing State value: {counter}</p>
            <button onClick={()=>dispatch(increment)}>Click Me</button>
        </div>
    )
}

export default Test;
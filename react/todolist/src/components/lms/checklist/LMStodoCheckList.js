import './LMSApp.css';


function LMStodoCheckList(props){
    let inputList = props.todo;
    return(
        <div className='App'>
            <h1>To do List</h1>
            {inputList && inputList.map((item, index) => 
            <div key={index}>
                 <input value={item} type="checkbox" />
              <span className={item}>{item}</span>
            </div>)}
        </div>
    )
}

export default LMStodoCheckList;
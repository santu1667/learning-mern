import './App.css';

function Example(props){
    let animals = props.animals;
    console.log(animals);
    
    return(
        <div className='App'>
            {
                animals.map( animal =>(<p>{animal}</p>))
            }
        </div>
    )
}

export default Example;
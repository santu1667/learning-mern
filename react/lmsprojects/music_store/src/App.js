import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <h3>Music Store</h3>
      <input placeholder='Enter Your Search here'></input>
      <hr/>
      <Products/>
    </div>
  );
}

export default App;

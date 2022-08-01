import '../css/Home.css';
import Carousel from './Carousel';
import Categories from './Categories';
import Products from './Products';

function Home() {
  return (
      <div className='App'>
        <div>
          <Carousel/>
        </div>
        <div>
          <Categories/>
        </div>
        <div>
          <Products/>
        </div>
        <br/><br/><br/>
      </div>
    )}


export default Home;

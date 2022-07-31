import '../css/Home.css';
import Carousel from './Carousel';
import Categories from './Categories';

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
          <Carousel/>
        </div>
        <div>
          <Carousel/>
        </div>
        <div>
          <Carousel/>
        </div>
        <br/><br/><br/>
      </div>
    )}


export default Home;

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
      </div>
    )}


export default Home;

import { useEffect, useState} from 'react';
import '../css/Home.css';
import Carousel from './Carousel';
import Categories from './Categories';
import Products from './Products';
import axios from 'axios';

function Home(props) {
  const [categoryList,setCategoryList] = useState(["Mobiles","Video Games","Toys"]);

  useEffect(()=>{
    console.log('inside useEffect Home')
    retreiveCategories();
  },[])

  const retreiveCategories = async ()=>{
    var response =  await axios.get('http://localhost:8080/api/v1/homepage/categories');
      if(response && response.data){
        console.log('***Inside categories')
        console.log(response.data.categories);
          setCategoryList(response.data.categories)
      }
  }

  

  return (
      <div className='App'>
        <div>
          <Carousel/>
        </div>
        <div>
          <Categories categoryList={categoryList}/>
        </div>
        <div>
          <Products setCart={props.setCart}/>
        </div>
        <br/><br/><br/>
      </div>
    )}


export default Home;

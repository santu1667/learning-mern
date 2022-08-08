import { useEffect, useState} from 'react';
import '../css/Home.css';
import Carousel from './user/Carousel';
import Categories from './user/Categories';
import Products from './user/Products';
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
        <div id="homepage-banner">
          <Carousel/>
        </div>
        <div id="homepage-category">
          <Categories categoryList={categoryList}/>
        </div>
        <div>
          <Products id="homepage-product" setCart={props.setCart} cart={props.cart} 
          setCartCount={props.setCartCount}/>
        </div>
        <br/><br/><br/>
      </div>
    )}


export default Home;

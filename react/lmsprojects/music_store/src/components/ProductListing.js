import '../App.css';
import './product.css';


function ProductListing({products}) {

  console.log('products in product listing'+ {products})
  return (
    <div className="App">
       {products &&
          products.map((data) => 
          <div key={data.id} className="card col-md-3">
            <div class="row">
              <div className="card-img">
            <img class="card-img-top" src={data.img} alt={data.name}/>
              </div>
              <hr/>
              <span class="topTemp">{data.name}</span>
              </div>
              <div class="card-body">
              <span class="max">Rs. {data.price}</span>  
              <h4 class="card-title">{data.type}</h4>
              <p class="card-text">
              <p class="day">Rs. {data.price}</p>
              </p>
            </div>
            </div>)}
    </div>
  );
}

export default ProductListing;
import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Products from './products';
import Home from './home';
import AddProduct  from './products';
import productDetails from './productDetails';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" 
                            data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <Link to='/' className="navbar-brand">Edureka</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/product/:productId">productDetails</Link></li>
                            <li><Link to="/addProduct">AddProduct</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/product" component={Products}></Route>
                    <Route exact path="/product/:productId" component={productDetails}/>
                    <Route path="/addProduct" component={AddProduct}></Route>
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;
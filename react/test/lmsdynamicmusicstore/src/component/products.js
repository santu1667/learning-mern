import React, {Component} from 'react';
import ProductList from './productListing';

const url = "http://localhost:6700/products"
class Products extends Component {

    constructor(){
        super()

        this.state ={
            title: 'Products Page',
            products: ''
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                products:data
            })
        })
    }

    render(){
        console.log(this.state.products)
        return(
            <div>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <ProductList prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Products;
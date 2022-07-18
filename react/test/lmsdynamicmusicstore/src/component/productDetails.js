import React, {Component} from 'react';
import Listing from './detailListing';

const url= 'http://localhost:6700/products';

class ProductDetail extends Component {
    constructor(props){
        super(props);

        this.state={
            details:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.productId)
        fetch(`${url}/${this.props.match.params.productId}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then((data)=> {
            this.setState({
                details:data
            })
        })
    }

    render(){
        return(
            <div>
                <center>
                    <h2>Product Details</h2>
                </center>
                <Listing detaildata={this.state.details}/>
                
            </div>
        )
    }
}

export default ProductDetail;
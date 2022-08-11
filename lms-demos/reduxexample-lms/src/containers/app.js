import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import DisplayItems from '../component/displayItems'

class App extends Component {

    componentDidMount(){
        this.props.foodItems();
    }
    
    render(){
        return(
            <div> 
                <DisplayItems datalist={this.props.output}></DisplayItems>
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return{
        output: state.food
    }

  }

export default connect(mapStateToProps,actions)(App);
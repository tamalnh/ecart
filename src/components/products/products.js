import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getAllProducts } from '../../store/action/product.action';

import Product from './product';

import './product.scss'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount(){
        this.props.getAllProducts()
    }


    render() { 
        const { products } = this.props.products  
        return ( 
            <div className="products__wrapper">
                <Product products={products} />
            </div>
         );
    }
}

const mapStateToProps = state => { 
    return{
        products: state.products
    }
}
 
export default connect(mapStateToProps, {getAllProducts})(Products);
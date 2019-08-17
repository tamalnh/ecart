import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { addToCart } from '../../store/action/cart.action';
import { singleProductDetails } from '../../store/action/product.action';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orderCount: 1, 
            isInCart: false
         }
    }


    addToCarthandler(e, product){
        // console.log(product)
        e.preventDefault();
        
        const selectedProduct = {
            ...product,
            count: this.state.orderCount
        }
        this.props.addToCart(selectedProduct)
    }

 
 
    getProducthandler(selectedProduct){
        this.props.singleProductDetails(selectedProduct);
    }

  


    render() { 
        const { products } = this.props;

        console.log(this.props.cart.cart)
        // console.log(this.state.orderCount)

        if(products.length > 0){
            return products.map(product => (
                <div key={product.id} className="single__product">
                    <div className="product__image" style={{background: `url(${product.image})`}}></div>
                        <div className="product__cart">
                            <a href="#" className="add__cart" onClick={e => this.addToCarthandler(e, product)}>Add To Cart</a>
                            <Link 
                                to={`/product/${product.slug}`}  
                                className="details"
                                onClick={() => this.getProducthandler(product)}>
                                Details
                            </Link>
                        </div>

                        <div className="product__meta">
                        <Link 
                            to={`/product/${product.slug}`}
                            onClick={() => this.getProducthandler(product)}
                        > 
                            {product.title}
                        </Link>
                            <span className="price">$ {product.price}</span>
                        </div>
                </div>
            ))
        }else{
            return(
                <div>
                    loading........
                </div>
            )
        }
    }
}


const mapStateToProps = state => { 
    return {
        cart: state.cart,
        // selectedProduct
    }
}

 
export default connect(mapStateToProps, {addToCart, singleProductDetails})(Products);
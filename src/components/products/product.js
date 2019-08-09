import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import { addToCart } from '../../store/action/cart.action';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orderCount: 1
         }
    }


    addToCarthandler(e, product){
        e.preventDefault();
        this.productCount(product.id)
        const selectedProduct = {
            ...product,
            count: this.state.orderCount
        }
        this.props.addToCart(selectedProduct)
    }

    productCount(id){
        const { cart } = this.props.cart; 

        if(cart.length > 0){
            let ItemRepeat = cart.filter(item => {
                if(item.id === id){ 
                    this.setState({
                        orderCount: this.state.orderCount += 1
                    })
                } else{
                    this.setState({
                        orderCount: 1
                    })
                }
            })
            return ItemRepeat
        }
    }


    render() { 
        const { products } = this.props;

        // console.log(this.props)
        console.log(this.state.orderCount)

        if(products.length){
            return products.map(product => (
                <div key={product.id} className="single__product">
                    <div className="product__image" style={{background: `url(${product.image})`}}></div>
                        <div className="product__cart">
                            <a href="#" className="add__cart" onClick={e => this.addToCarthandler(e, product)}>Add To Cart</a>
                            <a href="#" className="details">Details</a>
                        </div>

                        <div className="product__meta">
                            <a href="#">{product.title}</a>
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
        cart: state.cart
    }
}

 
export default connect(mapStateToProps, {addToCart})(Product);
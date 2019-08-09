import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";

class CartCount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    renderCartItem (cart){
        if(cart.length > 0){
            return cart.map((item, index) => (
                <a href="#" key={index} > 
                    <img src={item.image} /> 
                    {item.title}
                </a> 
            ))
        }
    }


    render() { 

        // console.log(this.props.cart)

        const {cart} = this.props.cart;
        // console.log(cart);
        

        return ( 
            <div className="cart__count">
                <a href="#" className="cart__icon"> <FiShoppingCart /> <span>{cart.length}</span>  </a>

                {cart.length > 0 && (
                    <div className="cart__list">
                        { this.renderCartItem(cart) }                }
                    </div>
                )}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
 
export default connect(mapStateToProps)(CartCount);
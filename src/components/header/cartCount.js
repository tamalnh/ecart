import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { removeItemFromCart } from '../../store/action/cart.action'

import { FiShoppingCart, FiXOctagon } from "react-icons/fi";

class CartCount extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showCartList: false
         }
    }


    renderCartItem (cart){
        if(cart.length > 0){
            return cart.map((item, index) => (
                <a href="#" key={index}> 
                    <span onClick={e => this.removeItemHandler(e,item.id)} ><FiXOctagon /></span>
                    <img src={item.image} /> 
                    {item.title}
                </a> 
            ))
        }
    }

    removeItemHandler(e, id){
        e.stopPropagation()
        e.preventDefault() 
        this.props.removeItemFromCart(id)
    }

    cartListhandler (e) { 
        e.preventDefault();
        
        if(this.state.showCartList === false){
            this.setState({
                showCartList: true
            })
        } else {
            this.setState({
                showCartList: false
            })
        }
    }


    render() { 

        // console.log(this.props)

        const {cart} = this.props.cart;
        // console.log(cart);
        

        return ( 
            <div className="cart__count" onClick={e => this.cartListhandler(e)}>
                <a href="#" className="cart__icon" > <FiShoppingCart /> <span>{cart.length}</span>  </a>
                {cart.length > 0 && (
                    <Link to="/checkout" className="cheout__btn">Checkout</Link>
                )}
                { this.state.showCartList && cart.length >=! 0 && (
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
 
export default connect(mapStateToProps, {removeItemFromCart})(CartCount);
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { addToCart, updateCart } from '../../store/action/cart.action'; 

import './singleProduct.scss'

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 1,
            isInCart: false,
            buttonText: 'Add To Cart'
         }
    }


    componentDidMount(){ 

        const {cart} = this.props.cart;
        const { selectedItem } = this.props
        // console.log()
        if(cart.length > 0){
            cart.filter(product => { 
                const isProductExists = product.id === selectedItem.id;

                if(isProductExists){ 
                    this.setState({
                        count: product.count,
                        isInCart: true, 
                    })
                }
            }) 
        }
    }

    countHandler(e){
        this.setState({
            count: e.target.value,
            buttonText: "Update Cart"
        })

        
    }


    addToCarthandler(e, product){
        if(!this.state.isInCart){
            e.preventDefault();
            // this.productCount(product.id)
            const selectedProduct = {
                ...product,
                count: this.state.count, 
            }
            this.props.addToCart(selectedProduct)

            this.setState({
                isInCart: true,
                buttonText: "Add To Cart"
            })
        }else{
            const selectedProduct = {
                ...product,
                count: this.state.count, 
            }
            this.props.updateCart(selectedProduct); 
        }
    }




    render() {  
        const { selectedItem } = this.props
        return ( 
            <div className="product__details_wrapper">
                <div className="__product">
                    <div className="product__preview">
                        <img src={selectedItem.image} />
                    </div>

                    <div className="product_content">
                        <h3>{selectedItem.title}</h3>
                        <span>${selectedItem.price}</span>
                        <p>{selectedItem.description}</p>

                        <div className="__meta">
                            <input 
                                type="number" 
                                className="cout" 
                                defaultValue={this.state.count} 
                                onChange={e => this.countHandler(e)}
                            />

                            <button 
                                type="submit" 
                                className="add__cart"
                                onClick={e => this.addToCarthandler(e, selectedItem)}    
                            >{this.state.buttonText}</button> 
                        </div>  
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        cart: state.cart,
        selectedItem: state.products.selectedProduct
    }
}
 
export default connect(mapStateToProps, {addToCart, updateCart})(SingleProduct);
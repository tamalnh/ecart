import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Login from '../login';

import './checkout.scss'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            phone: '',
            alternetPhone: '',
            city: '',
            zipCode: '',
            address: '',

            isLoggedIn: true
         }

         this.loginHandler = this.loginHandler.bind(this);


    }


    componentDidMount(){
        this.setState({
            isLoggedIn: false
        })


    }

    loginHandler(){ 
        this.setState({
            isLoggedIn: true,
            name: 'Bruce J Crenshaw',
            email: 'brucejcrenshaw@gmail.com',
            phone: '617-439-8453',
            alternetPhone: '857-207-2287',
            city: 'Boston',
            zipCode: '02107',
            address: '3186  Hinkle Lake Road',
        })  
    }


    render() { 
        console.log(this.props.cart)
        const {cart} = this.props.cart;
        return ( 
            <div className="chekout__wrapper">
                {!this.state.isLoggedIn && (<Login handleClick={this.loginHandler} />)}

                <div className="checkout__form">
                    <div className="form__inline">
                        <input 
                            type="text" 
                            placeholder="*name..." 
                            name="name" 
                            defaultValue={this.state.name}/>
                    </div>
                    <div className="form__inline">
                        <input 
                            type="email"
                            placeholder="*email..." 
                            name="email"
                            defaultValue={this.state.email}/>  
                    </div>
                    <div className="form__inline">
                        <input 
                            type="text" 
                            placeholder="*phone number..." 
                            name="phone"
                            defaultValue={this.state.phone}/>
                        <input 
                            type="text" 
                            placeholder="alternet phone number..." 
                            name="alternetPhone"
                            defaultValue={this.state.alternetPhone}/>
                    </div>
                    <div className="form__inline">
                        <input 
                            type="text" 
                            placeholder="*city..." 
                            name="city"
                            defaultValue={this.state.city}/> 
                        <input 
                            type="text" 
                            placeholder="*zip code..." 
                            name="zipCode"
                            defaultValue={this.state.zipCode}/> 
                    </div> 
                    
                    <div className="form__inline">
                        <textarea 
                            name="address" 
                            placeholder="*address" 
                            value={this.state.address} 
                        />
                            
                    </div>
                </div>

                <div className="order__details">
                    <div className="title">
                        <h3>Checkout Summery</h3>
                    </div>

                    <div className="__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Unit Price</th> 
                                    <th></th>
                                    <th>quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                                {cart.length > 0 && (
                                    <tbody>
                                        {cart.map((item, index, arr) => (
                                            <tr key={index}>
                                                <td className="thumbnail">
                                                    <img src={item.image} alt={item.title}/> 
                                                    <Link to="#"> {item.title} </Link>
                                                </td>
                                                <td>${item.price}</td>
                                                <td>x</td>
                                                <td>{item.count}</td>
                                                <td>${Number(item.price*item.count)}</td>
                                            </tr>
                                        ))}    
                                    </tbody>
                                )}
                        </table>
                        <div className="table__footer">
                            <div>
                            total:<span> $56411</span>
                            </div>
                            <div>
                                <button type="submit">Proccess Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

const mapSateToProps = state => {
    return {
        cart: state.cart
    }
}
 
export default connect(mapSateToProps)(Checkout);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../../login';
import CreditCard from '../../creditCard';
import Success from '../../creditCard/success';

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

            isLoggedIn: true,
            isPayment: false,
            paymentStatus: '',
        }

        this.loginHandler = this.loginHandler.bind(this);
        this.paymentHandler = this.paymentHandler.bind(this);


    }


    componentDidMount() {
        this.setState({
            isLoggedIn: false
        })


    }

    paymentHandler() {
        this.setState({
            paymentStatus: 'DONE',
            isPayment: false
        })
    }

    loginHandler() {
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

    proccedToMapment({ cart }) {
        if (cart.length > 0) {
            this.setState({
                isPayment: true
            })
        }
    }

    renderTotalPrice() {
        const { cart } = this.props.cart;
        let totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    orderQtyhandler(e) {
        this.setState({
            orderQty: e.target.value
        })
    }


    render() {
        const { cart } = this.props.cart;
        return (
            <div className="chekout__wrapper">
                {!this.state.isLoggedIn && (<Login handleClick={this.loginHandler} />)}
                {this.state.paymentStatus === 'DONE' && (<Success />)}
                {this.state.isPayment && (<CreditCard paymentHandler={this.paymentHandler} />)}

                <div className="checkout__form">
                    <div className="form__inline">
                        <input
                            type="text"
                            placeholder="*name..."
                            name="name"
                            defaultValue={this.state.name} />
                    </div>
                    <div className="form__inline">
                        <input
                            type="email"
                            placeholder="*email..."
                            name="email"
                            defaultValue={this.state.email} />
                    </div>
                    <div className="form__inline">
                        <input
                            type="text"
                            placeholder="*phone number..."
                            name="phone"
                            defaultValue={this.state.phone} />
                        <input
                            type="text"
                            placeholder="alternet phone number..."
                            name="alternetPhone"
                            defaultValue={this.state.alternetPhone} />
                    </div>
                    <div className="form__inline">
                        <input
                            type="text"
                            placeholder="*city..."
                            name="city"
                            defaultValue={this.state.city} />
                        <input
                            type="text"
                            placeholder="*zip code..."
                            name="zipCode"
                            defaultValue={this.state.zipCode} />
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
                                                <img src={item.image} alt={item.title} />
                                                <Link to="#"> {item.title} </Link>
                                            </td>
                                            <td>${item.price}</td>
                                            <td>x</td>
                                            <td>{item.count}</td>
                                            <td>${Number(item.price * item.count)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </table>
                        <div className="table__footer">
                            <div>
                                total:<span> ${this.renderTotalPrice()}</span>
                            </div>
                            <div>
                                <button type="submit" onClick={() => this.proccedToMapment(this.props.cart)}>Proccess Order</button>
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
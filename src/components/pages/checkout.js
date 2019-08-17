import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
            address: ''
         }

    }
    render() { 
        return ( 
            <div className="chekout__wrapper">
                <div className="checkout__form">
                    <div className="form__inline">
                        <input type="text" placeholder="name..." name="name" />
                    </div>
                    <div className="form__inline">
                        <input type="email" placeholder="email..." name="email"/>  
                    </div>
                    <div className="form__inline">
                        <input type="text" placeholder="phone number..." name="phone"/>
                        <input type="text" placeholder="alternet phone number..." name="alternetPhone"/>
                    </div>
                    <div className="form__inline">
                        <input type="text" placeholder="city..." name="city"/> 
                        <input type="text" placeholder="zip code..." name="zipCode"/> 
                    </div>
                    <div className="form__inline">
                        <input type="text" placeholder="cityr..." name="city"/> 
                        <input type="text" placeholder="zip code..." name="zipCode"/> 
                    </div>
                    
                    <div className="form__inline">
                        <textarea name="address" placeholder="address"></textarea>  
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

                            <tbody>
                                <tr>
                                    <td><img src="" alt="product image"/> <Link to="#"> title </Link></td>
                                    <td>$4561</td>
                                    <td>x</td>
                                    <td>2</td>
                                    <td>$14553</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>total: $56411</td> 
                                </tr>
                                <tr>
                                    <td><button type="submit">Proceed to Checkout</button></td> 
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Checkout;
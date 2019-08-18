import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { clearCart } from '../../store/action/cart.action';

import './card.scss'

class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="credit__card">
                <div className="card__box">
                    <p> Payment Done!</p>
                    <p> Thanks for Purchasing!</p>
                    <Link to="/" onClick={() => {this.props.clearCart()}}>Back to Home</Link>
                </div>
            </div>
         );
    }
}
 
export default connect(null, {clearCart})(Success);
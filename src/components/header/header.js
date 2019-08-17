import React from 'react';
import { Link } from 'react-router-dom';
import CartCount from './cartCount';

import './header.scss'

const Header = () => {
    return ( 
        <div className="app__header">
            <div className="logo">
                <Link to="/"> <span>E</span>cart </Link>
            </div> 
            <CartCount />
        </div>
     );
}
 
export default Header; 
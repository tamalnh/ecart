import React from 'react';
import CartCount from './cartCount';

import './header.scss'

const Header = () => {
    return ( 
        <div className="app__header">
            <div className="logo">
                <a href="#"> <span>E</span>cart </a>
            </div> 
            <CartCount />
        </div>
     );
}
 
export default Header; 
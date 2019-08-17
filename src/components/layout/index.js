import React from 'react';
import Headr from '../header/header'

const Layout = (props) => {
    return ( 
        <div id="app">
            <Headr />
            {props.children}
        </div>
     );
}
 
export default Layout;
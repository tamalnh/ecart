import React from 'react';

import './login.scss'

const Login = (props) => {

    const clickHandler = () => {
        props.handleClick()
    }
    return (
        <div className="__login">
            <div>
                <button type="submit" onClick={() => clickHandler()}>CLick to login</button>

                <p>this app use all the dummy data. Please click here to login</p>
            </div>
        </div>
    );
}

export default Login;
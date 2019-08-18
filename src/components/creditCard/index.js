import React, { useState } from 'react';


import './card.scss'



const CreditCard = (props) => {
    const [cardNumber, setCardNumber] = useState('')

    const clickHandler = () => {
        if (cardNumber) {
            props.paymentHandler()
        }
    }

    const inputHandler = (e) => {
        setCardNumber(e.target.value)
    }



    return (
        <div className="credit__card">
            <div className="card__box">
                <input type="text" placeholder="card number..." onChange={e => inputHandler(e)} value={cardNumber} />
                <button type="submit" onClick={() => clickHandler()}>Submit</button>
                {!cardNumber && (
                    <p>*Please prodive a number</p>
                )}
            </div>
        </div>
    );
}

export default CreditCard;
import {  ADD_TO_CART } from '../action/types.action';

const initialState = {
    cart: []
}

export default function(state=initialState, action){
    switch (action.type) {
        case ADD_TO_CART:
            return{ 
                cart: [...state.cart, action.payload]
            }
    
        default:
            return state;
    }
}
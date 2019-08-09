import { GET_ALL_PRODUCTS, SHOPPING_CART } from '../action/types.action';

const initialState = {
    products: {}
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}
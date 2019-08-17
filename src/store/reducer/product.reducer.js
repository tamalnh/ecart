import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from '../action/types.action';

const initialState = {
    products: {},
    selectedProduct: {}
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        
        case GET_SINGLE_PRODUCT: 
            return {
                ...state,
                selectedProduct:  action.payload
            }

        default:
            return state;
    }
}
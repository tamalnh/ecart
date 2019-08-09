import { ADD_TO_CART } from './types.action'; 


export const addToCart =(product) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}
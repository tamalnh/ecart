
import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from './types.action';
import data from '../../data';


export const getAllProducts = () => dispatch => {
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data
    })
}


export const singleProductDetails = selectedProduct => dispatch => {
    dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: selectedProduct
    })
}
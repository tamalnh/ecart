
import axios from 'axios';
import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from './types.action'; 
import data from '../../data';


// const BASE_URL = `https://depot.mikado-themes.com/wp-json/wp/v2`

export const getAllProducts = () => dispatch => {
    // console.log(data)
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
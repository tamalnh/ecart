
import axios from 'axios';
import { GET_ALL_PRODUCTS } from './types.action'; 
import data from '../../data';


// const BASE_URL = `https://depot.mikado-themes.com/wp-json/wp/v2`

export const getAllProducts = () => dispatch => {
    // console.log(data)
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data
    })
//    const res = await axios.get(`${BASE_URL}/product`)
//     console.log(res);
}
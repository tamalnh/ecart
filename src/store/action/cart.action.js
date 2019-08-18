import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART, CLEAR_CART_LIST } from './types.action';  

export const addToCart =(product) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}

export const removeItemFromCart = ItemId => dispatch => { 
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: ItemId
    })
}

export const updateCart = product => dispatch => { 
    dispatch({
        type: UPDATE_CART,
        payload: product
    })
}


export const clearCart = () => dispatch => {
    dispatch({
        type: CLEAR_CART_LIST,
        payload: []
    })
}
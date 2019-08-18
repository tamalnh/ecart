import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART, CLEAR_CART_LIST } from '../action/types.action';

const initialState = {
    cart: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.payload]
            }

        case REMOVE_ITEM_FROM_CART:
            if (state.cart.length > 0) {
                return {
                    cart: [...state.cart.filter(item => item.id !== action.payload)]
                }
            }

        case UPDATE_CART:
            const itemIndex = state.cart.findIndex(item => item.id === action.payload)
            state.cart.splice(itemIndex, 1, action.payload)
            return {
                ...state,
                cart: state.cart
            }

        case CLEAR_CART_LIST:
            return {
                ...state,
                cart: action.payload
            }


        default:
            return state;
    }
}
import { actionTypes } from "../actionTypes/actionTypes"

export const handleAddToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}
export const handleRemoveFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    }
}
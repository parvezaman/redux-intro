import { actionTypes } from "../actionTypes/actionTypes"

export const handleAddToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}
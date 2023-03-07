import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product.model === action.payload.model)
    console.log(selectedProduct);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if (selectedProduct) {
                const cartWithoutNewItem = state.cart.filter(product => product.model !== action.payload.model)
                selectedProduct.quantity++;
                return {
                    ...state, cart: [...cartWithoutNewItem, selectedProduct]
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };
        case actionTypes.REMOVE_FROM_CART:
            if (selectedProduct && selectedProduct.quantity > 1) {
                const cartWithoutSelectedItem = state.cart.filter(product => product.model !== action.payload.model)
                selectedProduct.quantity--
                return {
                    ...state, cart: [selectedProduct, ...cartWithoutSelectedItem]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product.model !== action.payload.model)
            };

        default:
            return state;
    }
}

export default productReducer;
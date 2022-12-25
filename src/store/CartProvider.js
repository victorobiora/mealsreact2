import {React, useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const updatedItem = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount)
        return {
            items: updatedItem,
            totalAmount: updatedAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    console.log(item)
        dispatchCartState({type: 'ADD_ITEM', item: item})
  }

const RemoveItemFromCartHandler = id => {

}
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: RemoveItemFromCartHandler
    };

    console.log(cartState);

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;
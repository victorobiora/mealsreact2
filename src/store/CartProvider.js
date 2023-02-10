import {React, useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const postCartHandler = ()=> {

};

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
       const updatedAmount = state.totalAmount + (action.item.price * action.item.amount)
       
 const existingCartItemIndex = state.items.findIndex(item =>
                                  item.id === action.item.id);
     const existingCartItem = state.items[existingCartItemIndex];  
     let updatedItems;
     
     if(existingCartItem){
       const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
        }
 
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem;
      
     } else{
        updatedItems = state.items.concat(action.item);
     };
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(item =>
            item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex]; 
         console.log(existingCartItem.amount)
        const totalUpdatedPrice = state.totalAmount - existingCartItem.price;

        let updatedItems 

        if(existingCartItem.amount === 1){
           updatedItems = state.items.filter(el => el.id !== action.id);
           console.log(updatedItems)
        }else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        };
        return {
            items: updatedItems,
            totalAmount: totalUpdatedPrice
        };
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
        dispatchCartState({type: 'ADD_ITEM', item: item})
  }

const RemoveItemFromCartHandler = id => {
    dispatchCartState({type: 'REMOVE_ITEM', id: id})
}
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: RemoveItemFromCartHandler,
        postCart: postCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;
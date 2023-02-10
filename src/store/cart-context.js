import React from "react";

const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: ()=> {},
    removeItem: ()=>{},
    postOrders: {}
});

export default cartContext;
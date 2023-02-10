import React from "react";

const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: ()=> {},
    removeItem: ()=>{},
    postCart: () => {}
});

export default cartContext;
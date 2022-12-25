import {React, useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = props => {
    const ctx = useContext(cartContext);
    const [buttonIsLit, setButtonIsLit] = useState(true)

    const { items } = ctx;
    const cartTotalAmount = ctx.items.reduce((curNum, item) => {

        return (curNum + item.amount)
    }, 0)

    const bigButton = `${classes.button} ${buttonIsLit ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0){
            return;
        }

        setButtonIsLit(true)
        const timer = setTimeout(()=> {
            setButtonIsLit(false)
        }, 300)

        return ()=>{
            clearTimeout(timer)
        } 
    }, [items])

    return <button className={bigButton} onClick = {props.onClick}>
        <span className={classes.icon}> <CartIcon /> </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartTotalAmount}</span>
    </button>
};

export default HeaderCartButton;
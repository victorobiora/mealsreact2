import classes from './Cart.module.css'
import CartOverlay from './CartOverlay'
import CartItem from './CartItem'
import cartContext from '../../store/cart-context'
import { useContext } from 'react'


const Cart = props => {
    const cartCtx = useContext(cartContext);
    console.log(cartCtx)
  
    const totalAmountFormatted = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0


    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(el =>
         (< CartItem key={el.id} name ={el.name} price = {el.price} amount = {el.amount}/>) )}</ul>

        

        
 return (
    <CartOverlay onClose = {props.removeCart}>
        <div> {cartItems}</div> 
        <div className={classes.total}>
               <span>Amount</span>
               <span>{totalAmountFormatted}</span>
        </div> 
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.removeCart}>close</button>
         { hasItems &&  <button className={classes.button}>Order</button> } 
        </div>
      </CartOverlay>
 )
}

export default Cart;
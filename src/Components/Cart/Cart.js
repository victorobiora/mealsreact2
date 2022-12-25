import classes from './Cart.module.css'
import CartOverlay from './CartOverlay'
import CartItem from './CartItem'
import cartContext from '../../store/cart-context'
import { useContext } from 'react'


const Cart = props => {
    const cartCtx = useContext(cartContext);
    const totalAmountFormatted = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    console.log(cartCtx)
  

    const cartItemAddHandler = item => {
      cartCtx.addItem({...item, amount: 1})
    }

    const cartItemRemoveHandler = id => {
        console.log(cartCtx)
      cartCtx.removeItem(id)
    }


    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(el =>
         (< CartItem key={el.id}
             name ={el.name}
             price = {el.price}
            amount = {el.amount}
            onRemove = {cartItemRemoveHandler.bind(null, el.id)}
            onAdd = {cartItemAddHandler.bind(null, el)}/>) )}</ul>

        

        
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
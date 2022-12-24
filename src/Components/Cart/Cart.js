import classes from './Cart.module.css'
import CartOverlay from './CartOverlay'



const Cart = props => {
  
    const cartItems = <ul className={classes['cart-items']}>
        {[{id: 'h1', name: 'sushi', key: Math.floor(Math.random() *1000) }, 
        {id: 'h2', name: 'beans', key: Math.floor(Math.random() *1000) }].map(el =>
         (<li key={el.key}>{el.name}</li>) )}</ul>

        

        
 return (
    <CartOverlay onClose = {props.removeCart}>
        <div> {cartItems}</div> 
        <div className={classes.total}>
               <span>Amount</span>
               <span>35.69</span>
        </div> 
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.removeCart}>close</button>
            <button className={classes.button}>Order</button>
        </div>
      </CartOverlay>
 )
}

export default Cart;
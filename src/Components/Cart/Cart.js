import classes from './Cart.module.css'
import { ReactDOM } from 'react-dom'
import CartOverlay from './CartOverlay'

const Cart = props => {

    const cartItems = <ul className={classes['cart-items']}>
        {[{id: 'h1', name: 'sushi'}].map(el => { <li>el.name</li>})}</ul>

        
 return (
      <CartOverlay>
        <div> {cartItems}</div> 
        <div className={classes.total}>
               <span>Amount</span>
               <span>35.69</span>
        </div> 
        <div className={classes.action}>
            <button className={classes['button--alt']}>close</button>
            <button className={classes.button}>Order</button>
        </div>
      </CartOverlay>
 )
}

export default Cart
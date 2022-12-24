import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { React, useContext} from 'react'
import cartContext from '../../../store/cart-context';

const MealItem = props => {
  const ctx = useContext(cartContext);

    const addItemHandler = amount => {
      console.log(amount)
      ctx.addItem({ name:props.name, id: props.id, price: props.price, amount: amount})
    }

    const price = `$${props.price.toFixed(2)}`

return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>  
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm id={props.id} type="number" onClick = {addItemHandler}/>
    </li> 
};

export default MealItem;
import classes from './MealItemForm.module.css'
import inputclass from './Input.module.css'
import { useRef } from 'react';

const MealItemForm = props => {
    const amountVal = useRef(0);

    const amountSubmitHandler = event => {
         event.preventDefault()
        props.onClick(amountVal.current.value)
    }

return <form className={classes.form}>
        <div className={inputclass.input}>
            <label htmlFor={props.id} className = {inputclass.label}> Amount</label>
            <input 
            ref= {amountVal}
            id={props.id}
            type={props.type}
            min= '1'
            max= '5'
            step= '1'
            defaultValue='1' />
        </div>
        <button onClick={amountSubmitHandler}> + Add </button>
       </form>
};

export default MealItemForm;
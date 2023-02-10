import classes from './OrderForm.module.css'
import { useState } from 'react'

const OrderForm = props => {
    const [nameIsValid, setNameIsValid] = useState(null);
    const [addressIsValid, setAddressIsValid] = useState(null)
    const errText = 'value inputed is too short. please cross-check'
  

const validateInput = event => {
    if(event.target.id === "ordername"){
         if(event.target.value.trim().length < 4){
     setNameIsValid(false)
    }else {
        setNameIsValid(true)
    }
    } else{
        if(event.target.value.trim().length < 4){
            setAddressIsValid(false)
           }else {
               setAddressIsValid(true)
           }
    }
   
}
console.log(nameIsValid)
    return <form>
        <div className={classes.orderDiv}>
            <label htmlFor="ordername"> Name</label>
            <input id="ordername" type="text" size="30" onChange={validateInput}/>
            {nameIsValid === false && errText}
        </div>
        <div className={classes.orderDiv}>
            <label htmlFor="orderaddy"> Address</label>
            <input id="orderaddy" type="text" size="30" onChange={validateInput}/>
            {addressIsValid === false && errText}
        </div>
    </form>
}

export default OrderForm
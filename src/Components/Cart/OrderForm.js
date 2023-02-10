import classes from './OrderForm.module.css'
import { useState, useContext } from 'react'
import cartContext from '../../store/cart-context'

const OrderForm = props => {
    const ctx = useContext(cartContext)
    const [nameIsValid, setNameIsValid] = useState(null);
    const [addressIsValid, setAddressIsValid] = useState(null);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const errText = 'value inputed is too short. please cross-check'

    //setting the post Order for when Order is to be sent 
    ctx.postOrders = {
        name: name,
        address: address,
        items: ctx.items,
        amount: ctx.totalAmount
  }


const validateInput = event => {
    if(event.target.id === "ordername"){
         if(event.target.value.trim().length < 4){
     setNameIsValid(false)
    }else {
        setNameIsValid(true)
        setName(event.target.value)
    }
    } else{
        if(event.target.value.trim().length < 4){
            setAddressIsValid(false)
           }else {
               setAddressIsValid(true)
               setAddress(event.target.value)
           }
    }

}

    return <form>
        <div className={classes.orderDiv}>
            <label htmlFor="ordername"> Name</label>
            <input id="ordername" type="text" size="30" onChange={validateInput} />
            {nameIsValid === false && errText}
        </div>
        <div className={classes.orderDiv}>
            <label htmlFor="orderaddy"> Address</label>
            <input id="orderaddy" type="text" size="30" onChange={validateInput}/>
            {addressIsValid === false && errText}
        </div>
    </form>
}

export default OrderForm;
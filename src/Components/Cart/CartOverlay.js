import { Fragment } from 'react';
import reactDom from 'react-dom';
import classes from './CartOverlay.module.css'

const location = document.getElementById('backback');
const Backdrop = props => {
 return <div className= {classes.backdrop} onClick = {props.onClose}></div>
}
const CartView = props => {
    return (
     <div className = {classes.modal}>
     <div className = {classes.content}>{props.children}</div>
   </div>
    )
} 

const CartOverlay = props => {
    return <Fragment>
        {reactDom.createPortal(<Backdrop  onClose= {props.onClose}/>, location)}
        {reactDom.createPortal(<CartView>{props.children}</CartView>, location)}
    </Fragment>
 };    


 export default CartOverlay;
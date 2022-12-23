import { Fragment } from 'react'

const backdrop = props => {

} 

const realOverlay = props => {
    return <Fragment>
        <div> 
            <div> {props.children}</div>
        </div>
    </Fragment>
}



const CartOverlay = props => {
    return <Fragment>
        {props.children}
           </Fragment>
 };    
import React from "react";

import classes from './OrderButton.module.css';

const OrderButton = (props) => {
    
    return (
        <button className={classes.orderbtn}
                onClick={props.onClick}>
            <span>Order</span>
            
        </button>
    )
}

export default OrderButton;
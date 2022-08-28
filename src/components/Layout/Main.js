import React from 'react';

import Products from '../Products/Products';
import Invoice from '../Invoices/Invoice';
import classes from './Main.module.css';


const Main = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes['main-products']}>
                <Products/>
            </div>
            <div className={classes['main-invoice']}>
                <Invoice/>
            </div>
        </div>
    )
};

export default Main;
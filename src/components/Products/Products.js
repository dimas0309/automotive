import React from 'react';

import Modal from '../UI/Modal';
import ProductList from "./ProductList";
import classes from './Products.module.css';

const Products = (props) => {
    return (
        <div>
            <div className={classes.products}>
                <ProductList />
            </div>
        </div>
    )
};

export default Products;
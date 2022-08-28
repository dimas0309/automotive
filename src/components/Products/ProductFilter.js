import {useRef, useState } from 'react';

import DummyProducts from '../../assets/dummy_products'
import classes from './ProductFilter.module.css';

const ProductFilter = (props) => {
    const dropdownRef = useRef();
    
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)

    }

    const productNames = DummyProducts.map((product) => (
        <option value={product.name}>
            {product.name}
        </option>
    ))

    return (
        <div className={classes['expenses-filter']}>
            <div className={classes['expenses-filter__control']}>
            <select ref={dropdownRef}
                    value={props.selected}
                    onChange={dropdownChangeHandler}>
                    {productNames}
            </select>

            </div>
        </div>
    )
};

export default ProductFilter;
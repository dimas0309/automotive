import React from 'react';

 
import DummyProducts from '../../assets/dummy_products';
import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

const ProductList = (props) => {
    const productList = DummyProducts.map((product => (
                <ProductItem key={product.id}
                             name={product.name}
                             price={product.price}/>
            )
        ))

    return (
        <div className={classes.productlist}> 
            <ul>
                {productList}
            </ul>
        </div>
    )
}

export default ProductList;
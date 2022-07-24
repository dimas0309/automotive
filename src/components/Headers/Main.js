import React, { useState } from "react";
import InvoiceLine from "../Invoices/InvoiceLine";

import Product from "../Products/Product";
import classes from './Main.module.css';

const Main = (props) => {
    const [addProduct, setAddProduct] = useState([]);

    const addProductHandle = (item, quantity, unitPrice, netPrice) => {
        setAddProduct((prevAddProduct) => {
             return [
                ...prevAddProduct,
                {item, quantity, unitPrice, netPrice}
             ];
        });
    };

    return (
        <main className={classes.main}>
            <Product onAddProduct={addProductHandle}/>
            <InvoiceLine productList={addProduct}/>
        </main>
        
    )

};

export default Main;
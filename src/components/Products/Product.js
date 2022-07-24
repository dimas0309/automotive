import React, { useState} from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './Product.module.css';

const Product = (props) => {
    let products = [
        {
            item: 'Aceite 10w/40',
            unitPrice: 550.00
        },
        {
            item: 'Aceite ATF',
            unitPrice: 800.00
        },
        {
            item: 'Liquido de frenos',
            unitPrice: 250.00
        },
        {
            item: 'Coolant',
            unitPrice: 200.00
        },
        {
            item: 'Agua de bateria',
            unitPrice: 150.00
        }
    ];
    
    const [prodSelect, setProdSelect] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');
    
    const prodSelectHandle = (event) => {
        setProdSelect(event.target.value);
    }

    const quantityHandle = (event) => {
        setQuantity(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const list = prodSelect.split("$");
        const item = list[0]
        const price = list[1]
        const netPrice = quantity * list[1];

        if (item.trim().length === 0 || price.trim().length === 0 || quantity.trim().length === 0){
            setError({
                title: 'Item not selected or quantity empty',
                message: 'Please select an item or type a number',
            })
            return;
        }

        if (+quantity < 1 ){
            setError({
                title: 'Invalid quantity',
                message: 'Please type a quantity > 0',
                
            })
            return;
        }

        props.onAddProduct(item, quantity, price, netPrice);
        setQuantity('');
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && (
                <Modal title={error.title}
                        message={error.message}
                        onConfirm={errorHandler}/>
            )}
            <Card className={classes.product}>
                <form onSubmit={submitHandler}>
                    <div className={classes.prodselect}>
                    <select onChange={prodSelectHandle}>
                        <option >
                            {products[0].item} ${products[0].unitPrice}
                       </option> 
                        <option>
                            {products[1].item} ${products[1].unitPrice}
                       </option>
                        <option>
                            {products[2].item} ${products[2].unitPrice}
                       </option> 
                        <option >
                            {products[3].item} ${products[3].unitPrice}
                       </option>   
                        <option>
                            {products[4].item} ${products[4].unitPrice}
                       </option>   
                   </select>
                    </div>
                    
                   <div className={classes.quantity}>
                        <label>Quantity</label>
                        <input type="number" value={quantity}
                               onChange={quantityHandle}/>
                   </div>
                  <div className={classes.button}>
                    <Button type="submit">Add Item</Button> 

                  </div>
                         
               </form> 
           </Card>
       </Wrapper>
    )
};

export default Product;

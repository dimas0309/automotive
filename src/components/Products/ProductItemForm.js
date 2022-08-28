import { useState, useRef } from 'react';

import Input from '../UI/Input';
import classes from './ProductItemForm.module.css';

const ProductItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 100
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToInvoice(enteredAmountNumber);
    }

    return (
        <div className={classes.productForm}>
            <form onSubmit={submitHandler}>
                <Input ref={amountRef}
                    label='Amount'
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '100',
                        defaultValue: '1'
                    }}
                />
                <button>Add</button>
            </form>
        </div>

    )

};

export default ProductItemForm;
import {useRef, useState, useContext} from 'react';

import InvoiceContext from '../../store/invoice-context';
import Modal from '../UI/Modal';
import classes from './Order.module.css';

const Order = (props) => {
    const invoiceCtx = useContext(InvoiceContext);
    const amountPaidRef = useRef();
    const [amountPaidState, setAmountPaidState] = useState(0);
    const [balanceDueState, setBalanceDueState] = useState(0);
    const totalAmount = `$${invoiceCtx.totalAmount.toFixed(2)}`;

    const amountPaidHandle = (event) => {
        setAmountPaidState(event.target.value)
    }

    const balanceDueHandle = () => {
        const balanceDue = amountPaidState - invoiceCtx.totalAmount;

        if (amountPaidState > invoiceCtx.totalAmount){
            setBalanceDueState(balanceDue);
        } else {
            console.log('Please enter amount paid');
        }
        
    }
    
    return (
        
            <div className={classes.order}>
                <div className={classes['total-amount']}>
                    <span>Total Amount</span>
                    <span>=</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes['amount-paid']}>
                    <label htmlFor='amountPaid'>
                        Amount Paid
                    </label>
                    <input ref={amountPaidRef}
                           id={props.id}
                           type='number'
                           value={amountPaidState}
                           onChange={amountPaidHandle}/>
                </div>
                <div className={classes['balance-due']}>
                    <span>Balance Due</span>
                    <span>=</span>
                    <span>
                        {'$' + balanceDueState.toFixed(2)}
                    </span>
                </div>
                <div>
                    <button onClick={balanceDueHandle}>
                        Purchase
                    </button>
                </div>
                 
            </div>  
     
    )
};

export default Order;
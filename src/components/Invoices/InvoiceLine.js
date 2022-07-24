import React, {useState} from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './InvoiceLine.module.css';

const InvoiceLine = (props) => {
    const [amountPaid, setAmountPaid] = useState('');
    

    let sum = 0;

    const balanceDue = props.productList.map((product) => 
                            sum += parseInt(product.netPrice))

    const amountHandle = () => {
        console.log(props.productList);
        console.log(balanceDue[balanceDue.length-1]);

        if (balanceDue.length > 0){
            setAmountPaid({
                title: 'Amount Paid',
                message: balanceDue[balanceDue.length-1]
            })
            return;
        }
    } 

    const amountPaidHandle = () => {
        setAmountPaid(null);
    }

    return (
        <Wrapper>
            {amountPaid && (
                <Modal title={amountPaid.title}
                       message={amountPaid.message}
                       onConfirm={amountPaidHandle}/>
            ) 

            }
            <Card className={classes.invoiceline}>
            <table>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Net Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productList.map((product) =>
                        <tr>
                            <td>
                                {product.item}
                           </td>
                            <td>{product.quantity}</td>
                            <td>
                                {product.unitPrice}
                           </td>
                            <td>{product.netPrice}</td>
                       </tr>
                    )} 
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Balance Due</td>
                        <td>
                            { 
                               balanceDue[balanceDue.length -1]
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
            <Button onClick={amountHandle}>
                Amount Paid
            </Button>
        </Card>
        </Wrapper>
    )
};

export default InvoiceLine;
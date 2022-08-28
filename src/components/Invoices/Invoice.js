import { useContext } from 'react';

import Order from '../Order/Order';
import InvoiceItem from './InvoiceItem';
import Card from '../UI/Card';
import InvoiceContext from '../../store/invoice-context';
import classes from './Invoice.module.css';

const Invoice = (props) => {
    const invoiceCtx = useContext(InvoiceContext);
    const totalAmount = `$${invoiceCtx.totalAmount.toFixed(2)}`

    const invoiceItemAddHandler = (item) => {
        invoiceCtx.addItem({...item, amount: 1});
    };

    const invoiceItems = (
        <ul className={classes['invoice-items']}>
            {invoiceCtx.items.map((item) => (
                <InvoiceItem key={item.id}
                             id={item.id}
                             name={item.name}
                             amount={item.amount}
                             price={item.price}
                onAdd={invoiceItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    
    return (
        <Card className={classes.invoice}>
            <div>
                {invoiceItems}
            </div>
            <div>
                <Order/>
            </div>  
        </Card>
    )
}

export default Invoice;
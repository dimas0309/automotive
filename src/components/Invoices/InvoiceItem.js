
import classes from './InvoiceItem.module.css';

const InvoiceItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const netPrice = `$${(props.price*props.amount).toFixed(2)}`
    
    return (
        <li className={classes['invoice-item']}>
            <div>{props.name}</div>
            <div>{price}</div>
            <div>x{props.amount}</div>
            <div>=</div>
            <div>{netPrice}</div>
        </li>
        
    )
};

export default InvoiceItem;
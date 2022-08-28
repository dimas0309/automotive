import { useContext } from 'react';


import ProductItemForm from './ProductItemForm';
import InvoiceContext from '../../store/invoice-context';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const invoiceCtx = useContext(InvoiceContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToInvoiceHandler = (amount) => {
        invoiceCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.productItem}>
            <Card>
                <div className={classes['product-item']}>
                    <div>{props.name}</div>
                    <div>{price}</div>
                </div>
                <div className={classes['product-form']}>
                    <ProductItemForm id={props.id}
                        onAddToInvoice={addToInvoiceHandler} />
                </div>
            </Card>
        </li>
    )
};

export default ProductItem;
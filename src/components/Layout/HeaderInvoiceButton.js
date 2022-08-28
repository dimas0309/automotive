

import classes from './HeaderInvoiceButton.module.css';

const HeaderInvoiceButton = (props) => {
    return (
        <button className={classes.headerButton}
                onClick={props.onClick}>
            <span>Products</span>
        </button>
    )
}

export default HeaderInvoiceButton;
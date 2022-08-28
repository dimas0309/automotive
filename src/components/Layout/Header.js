import React from 'react';

import classes from './Header.module.css';
import HeaderInvoiceButton from './HeaderInvoiceButton';

const Header = (props) => {
    return (
        <header  className={classes.header}>
            <h1>WEB POS</h1>
        </header>
    )
}

export default Header;
import React from "react";

const InvoiceContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
})

export default InvoiceContext;
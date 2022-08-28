import { useReducer } from "react";

import InvoiceContext from "./invoice-context";

const defaultInvoiceState = {
    items: [],
    totalAmount: 0,
}

const invoiceReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };                           
    };

    return defaultInvoiceState;
};

const InvoiceProvider = (props) => {
    const [invoiceState, dispatchInvoiceAction] = useReducer(invoiceReducer, defaultInvoiceState);

    const addItemToInvoiceHandler = (item) => {
        dispatchInvoiceAction({type:'ADD',item:item});
    };

    const invoiceContext = {
        items: invoiceState.items,
        totalAmount: invoiceState.totalAmount,
        addItem: addItemToInvoiceHandler
    };

    return (
        <InvoiceContext.Provider value={invoiceContext}>
            {props.children}
        </InvoiceContext.Provider>
    )
};

export default InvoiceProvider;
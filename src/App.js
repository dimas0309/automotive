import { useState } from 'react';

import InvoiceProvider from './store/InvoiceProvider';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
 

function App() {
  const [orderIsShown, setOrderIsShown] = useState(false);
  const [productIsShow, setProductIsShow] = useState(false);

  const showOrderHandler = () => {
    setOrderIsShown(true);
  }

  const showProductHandle = () => {
    setProductIsShow(true);
  }

  const hideOrderHandler = () => {
    setOrderIsShown(false);
  }

  const hideProductHandler = () => {
    setProductIsShow(false)
  }

  return (
    <InvoiceProvider>
      <Header/>
      <main>
        <Main />
      </main>
    </InvoiceProvider>
  );
}

export default App;

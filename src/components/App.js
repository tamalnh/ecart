import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layout';
import Products from './products/products'
import SingleProduct from './pages/singleProduct'
import Checkout from './pages/checkout'

import './App.scss';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact={true} path="/" component={Products} />
          <Route path="/product/:slug" component={SingleProduct} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
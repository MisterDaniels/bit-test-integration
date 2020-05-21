import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProductList from '@bit/misterdaniels.product-list.product-list';

import ItemsList from './components/items-list';
import ItemsListSlide from './components/items-list-slide';
import ItemsListMotion from './components/items-list-motion';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ProductList />
    <ItemsList />
    <ItemsListSlide />
    <ItemsListMotion />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

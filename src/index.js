import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './Redux/Store/store.js'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyle/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
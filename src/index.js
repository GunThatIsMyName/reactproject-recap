import React from 'react';
import ReactDOM from 'react-dom';
import App from './cart/App';
import AppProvider from './cart/Context';
import "./cart/styles/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
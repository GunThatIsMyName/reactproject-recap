import React from 'react';
import ReactDOM from 'react-dom';
import App from './movie/App';
import AppProvider from './movie/Context';



ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
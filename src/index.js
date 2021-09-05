import React from 'react';
import ReactDOM from 'react-dom';
import App from './pagination/part2/App';
import AppProvider from './pagination/part2/Context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider> 
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
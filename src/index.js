import React from 'react';
import ReactDOM from 'react-dom';
import App from './photo/part2/App';
import AppProvider from './photo/part2/context';



ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
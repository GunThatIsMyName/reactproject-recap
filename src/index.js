import React from 'react';
import ReactDOM from 'react-dom';
import App from './modal/App';
import { AppProvider } from './modal/context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
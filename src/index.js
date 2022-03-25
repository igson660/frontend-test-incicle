import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { lightTheme } from './shared' 
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ lightTheme }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

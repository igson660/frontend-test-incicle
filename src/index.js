import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { lightTheme } from './shared';
import { AppContextProvider } from './shared';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={ lightTheme }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

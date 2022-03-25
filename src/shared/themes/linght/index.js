import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#3489B1',
      dark: '#245f7b',
      light: '#99c4d8',
      contrastText: '#707070',
    },

    secondary: {
      main: 'f0f0f0',
      dark: '3f3f3f',
      light: '3f3f3f',
      contrastText: '#707070',
    },

    background: {
      paper: '#FFFFFF',
      default: '#F2F3F5',
    }
  }
});

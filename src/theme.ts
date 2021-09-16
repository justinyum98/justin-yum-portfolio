import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ef473a',
      light: '#ef473a',
      dark: '#ef473a',
      contrastText: '#30122d',
    },
    secondary: {
      main: '#870734',
      light: '#870734',
      dark: '#870734',
      contrastText: '#30122d',
    },
    background: {
      paper: '#ffd6bf',
      default: '#ffd6bf',
    },
  },
});

export default theme;

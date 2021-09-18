import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
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
    text: {
      primary: '#30122d',
      secondary: '#ef473a',
    },
    background: {
      paper: '#ffd6bf',
      default: '#ffd6bf',
    },
  },
  typography: {
    
  }
});

export default theme;

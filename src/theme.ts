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
    mode: 'dark',
    primary: {
      main: '#F3B13E',
      light: '#F3B13E',
      dark: '#F3B13E',
      contrastText: '#1D0203',
    },
    secondary: {
      main: '#8C3D16',
      light: '#8C3D16',
      dark: '#8C3D16',
      contrastText: '#1D0203',
    },
    text: {
      primary: '#F3B13E',
      secondary: '#8C3D16',
    },
    background: {
      paper: '#1D0203',
      default: '#1D0203',
    },
  },
  typography: {},
});

export default theme;

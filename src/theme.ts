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
      main: '#F3B13E',
      contrastText: '#1D0203',
    },
    secondary: {
      main: '#8c3d16',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#F3B13E',
      secondary: '#8C3D16',
    },
    background: {
      paper: '#261011',
      default: '#1D0203',
    },
  },
});

export default theme;

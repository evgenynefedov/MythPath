import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ac66ef',
      contrastText: '#fff8e1',
    },
    secondary: {
      main: '#fdd835',
      contrastText: '#964c96',
    },
    background: {
      default: '#fee0ec',
      paper: '#fde7ef',
    },
    text: {
      primary: '#5e0724',
      secondary: 'rgba(133,65,133,0.5)',
    },
    divider: 'rgba(140,95,177,0.12)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
          borderRadius: '10px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          height: 48,
          padding: '0 30px',
          color: '#614d0c',
        },
        outlined: {
          border: '1px solid',
          borderImageSlice: 1,
          borderImageSource: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
          height: 48,
          padding: '0 10px',
          margin: '0 10px',
          color: '#614d0c',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        }
      }
    },
  },
});
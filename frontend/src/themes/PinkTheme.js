import { createTheme } from "@mui/material/styles";
const COLORS = {
  gold: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  goldText: 'radial-gradient(ellipse farthest-corner at right bottom, #e1c63c 0%, #bca26d 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)'
}

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F187D2',
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
        root: {
          background: COLORS.goldText,
          backgroundClip: 'text',
          color: 'transparent',
        },
        text: {
          background: COLORS.goldText,
          backgroundClip: 'text',
          color: 'transparent',
        },
        contained: {
          background: COLORS.gold,
          borderRadius: '10px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          height: 48,
          padding: '0 30px',
          color: '#614d0c',
        },
        outlined: {
          border: '1px solid',
          borderImageSlice: 1,
          borderImageSource: COLORS.gold,
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
        },
        '& .tale_page__img' : {
          border: '10px solid',
          borderImageSource: COLORS.gold,
          borderImageSlice: 1,
          borderImageRepeat: 'round',
        },
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#cfb681',
        },
        colorPrimary: {
          fill: '#614d0c',
        }
      }
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 400,
      background: COLORS.goldText, 
      backgroundClip: 'text',
      color: 'transparent',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      background: COLORS.goldText, 
      backgroundClip: 'text',
      color: 'transparent',
    },
    body2: {
      '::first-letter': {
        color: '#cfb681',
      }
    }
  },
});
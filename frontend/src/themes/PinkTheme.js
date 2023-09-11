import { createTheme } from "@mui/material/styles";
import { CONSTANTS } from "./../constants"
const COLORS = {
  gold: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  goldText: 'radial-gradient(ellipse farthest-corner at right bottom, #e1c63c 0%, #bca26d 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  goldButton: 'linear-gradient(to bottom, #a95, #fea)',
  goldTransparent: 'linear-gradient(to bottom, rgb(170 153 85 / 90%), rgb(255 238 170 / 90%))',
  // goldText: 'linear-gradient(to right, #a95, #a95, #fea, #a95, #a95)',
  primaryMain: '#F187D2',
  primaryText: '#fff8e1',
}

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primaryMain,
      contrastText: COLORS.primaryText,
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${CONSTANTS.cloudinaryBackgroundLink}/pinkMobile)`,
          '@media (orientation: landscape)': {
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${CONSTANTS.cloudinaryBackgroundLink}/pinkDesktop)`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        },
        '.swiper-button-next::after, .swiper-button-prev::after' : {
          background: COLORS.goldButton,
          padding: "10px",
          borderRadius: "10px",
          color: COLORS.primaryText,
        },
        'div.tale_page__img h2': {
          color: 'white',
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          borderRadius: '5px',
          background: COLORS.goldTransparent,
          padding: '5px',
        },
        '.spell_wand': {
          color: '#cfb681',
          width: '30px',
          height: '30px',
          padding: '9px',
          borderBottomLeftRadius: '30px',
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
        '.selected_spell': {
          position: 'absolute',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
        },
        '.selected_spell svg': {
          width: '150px',
          height: '150px',
          color: 'white',
          background: COLORS.goldTransparent,
          borderRadius: '5px',
        },
        '.close' : {
          color: 'white',
          width: '30px',
          height: '30px',
          background: COLORS.goldTransparent,
          borderRadius: '5px',
          padding: '3px', 
        }
      }
    },
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
          color: '#fff',
          borderRadius: '5px',
          padding: '10px 25px',
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
          border: '1px solid #ba6',
          background: COLORS.goldButton,
        },
        outlined: {
          border: '1px solid #ba6',
          borderRadius: '5px',
          padding: '0 10px',
          margin: '0 10px',
          color: '#614d0c',
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
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
    MuiCard: {
      styleOverrides: {
        root: {
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
          border: '3px solid #ba6', 
        }
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
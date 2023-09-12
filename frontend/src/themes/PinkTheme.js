import { createTheme } from "@mui/material/styles";
import { CONSTANTS } from "./../constants"
// import FlowerTtf from './../fonts/Flower.ttf'
// import RoyalTtf from './../fonts/RoyalJelly.ttf'

// const flower = {
//   fontFamily: 'Flower',
//   fontStyle: 'normal',
//   src: `url(${FlowerTtf})`
// }
// const royal = {
//   fontFamily: 'Royal',
//   fontStyle: 'normal',
//   src: `url(${RoyalTtf})`
// }

const COLORS = {
  borderGradient: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  headerText: 'radial-gradient(ellipse farthest-corner at right bottom, #e1c63c 0%, #bca26d 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  buttonGradient: 'linear-gradient(to bottom, #a95, #fea)',
  backgroundGradientTransparent: 'linear-gradient(to bottom, rgb(170 153 85 / 90%), rgb(255 238 170 / 90%))',
  backgroundSecondaryGradient: 'linear-gradient(to right, #fee0ec 50%, transparent)',
  backgroundPrimaryGradient: 'linear-gradient(to bottom, rgba(254, 224, 236, 0.8), rgba(253, 231, 239, 0.6))',
  icon: '#cfb681',
  outlinedText: '#614d0c',
  primaryMain: '#F187D2',
  primaryText: '#964c96',
  secondaryText: '#fff8e1',
  secondaryMain: '#fdd835',
  backgroundDefault: '#fee0ec',
  backgroundPaper: '#fde7ef',
  textPrimary: '#5e0724',
  textSecondary: 'rgba(133,65,133,0.5)',
  divider: 'rgba(140,95,177,0.12)',
  buttonColor: 'white',
  buttonBorder: '#ba6',
}

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primaryMain,
      contrastText: COLORS.primaryText,
    },
    secondary: {
      main: COLORS.secondaryMain,
      contrastText: COLORS.secondaryText,
    },
    background: {
      default: COLORS.backgroundDefault,
      paper: COLORS.backgroundPaper,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
    divider: COLORS.divider,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': ['Flower', 'Royal'],
        },
        body: {
          backgroundImage: `${COLORS.backgroundPrimaryGradient}, url(${CONSTANTS.cloudinaryBackgroundLink}/pinkMobile)`,
          '@media (orientation: landscape)': {
            backgroundImage: `${COLORS.backgroundPrimaryGradient}, url(${CONSTANTS.cloudinaryBackgroundLink}/pinkDesktop)`,
          },
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "100vh",
        },
        'body a': {
          textDecoration: 'none'
        },
        '.swiper-button-next::after, .swiper-button-prev::after' : {
          background: COLORS.buttonGradient,
          padding: "10px",
          borderRadius: "10px",
          color: COLORS.secondaryText,
        },
        '.spell_wand': {
          color: COLORS.icon,
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
          background: COLORS.backgroundGradientTransparent,
          borderRadius: '5px',
        },
        '.close' : {
          color: 'white',
          width: '30px',
          height: '30px',
          background: COLORS.backgroundGradientTransparent,
          borderRadius: '5px',
          padding: '3px', 
        },
        '.inner_list': {
          '@media (min-width:800px)': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            'li.MuiListItem-root': {
              width: 'calc((100% - 20px)/3)',
              marginRight: '6px',
            }
          }, 
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: COLORS.headerText,
          backgroundClip: 'text',
          color: 'transparent',
        },
        text: {
          background: COLORS.headerText,
          backgroundClip: 'text',
          color: 'transparent',
        },
        contained: {
          color: COLORS.buttonColor,
          borderRadius: '5px',
          padding: '10px 25px',
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
          border: `1px solid ${COLORS.buttonBorder}`,
          background: COLORS.buttonGradient,
        },
        outlined: {
          border: `1px solid ${COLORS.buttonBorder}`,
          borderRadius: '5px',
          padding: '0 10px',
          margin: '0 10px',
          color: COLORS.outlinedText,
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
        },
        endIcon: {
          width: '25px',
          height: '25px',
        }
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
        '& .tale_page__img' : {
          border: '10px solid',
          borderImageSource: COLORS.borderGradient,
          borderImageSlice: 1,
          borderImageRepeat: 'round',
        },
      }
    },
    MuiList: {
      styleOverrides: {
        padding: {
          backgroundColor: 'transparent',
        },
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          background: COLORS.backgroundSecondaryGradient,
          margin: '5px 0',
          borderRadius: '10px',
          maxWidth: '350px',
          color: COLORS.primaryText,
          fontSize: '1.5rem',
          fontWeight: 400,
        },
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: '8px',
          paddingBottom: '8px',
          border: `1px solid ${COLORS.buttonBorder}`,
          borderRadius: '5px',
          marginBottom: '4px',
          backgroundColor: COLORS.backgroundDefault,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
          border: `3px solid ${COLORS.buttonBorder}`, 
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '16px',
          position: 'relative',
          border: `3px solid ${COLORS.buttonBorder}`,
          borderRadius: '5px',
          backgroundColor: COLORS.backgroundDefault,
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: COLORS.icon,
        },
        colorPrimary: {
          fill: COLORS.outlinedText,
        }
      }
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
      background: COLORS.headerText, 
      backgroundClip: 'text',
      color: 'transparent',
      marginTop: '10px',
      fontFamily: 'Fairytale',
      lineHeight: 1,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      background: COLORS.headerText, 
      backgroundClip: 'text',
      color: 'transparent',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      background: COLORS.backgroundGradientTransparent, 
      color: COLORS.buttonColor,
      textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
      borderRadius: '5px',
      padding: '5px',
      textAlign: 'center',
    },
    body2: {
      '::first-letter': {
        color: COLORS.icon,
        fontFamily: 'Flower',
      }
    },
    body3: {
      color: COLORS.primaryText,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: 'block',
    }
  },
});
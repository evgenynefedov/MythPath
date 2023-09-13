import { createTheme } from "@mui/material/styles";
import { CONSTANTS } from "./../constants"

const COLORS = {
  borderGradient: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  headerText: 'radial-gradient(ellipse farthest-corner at right bottom, #e1c63c 0%, #bca26d 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  buttonGradient: 'linear-gradient(to bottom, #a95, #fea)',
  backgroundGradientTransparent: 'linear-gradient(to bottom, rgb(170 153 85 / 90%), rgb(255 238 170 / 90%))',
  backgroundSecondaryGradient: 'linear-gradient(to right, #d9edbd 50%, transparent)',
  backgroundPrimaryGradient: 'linear-gradient(to bottom, rgb(239 254 224 / 80%), rgb(169 185 169 / 60%))',
  icon: '#cfb681',
  outlinedText: '#614d0c',
  primaryMain: '#71c067',
  primaryText: '#964c96',
  secondaryText: '#fff8e1',
  secondaryMain: '#fdd835',
  backgroundDefault: '#d9edbd',
  backgroundPaper: '#e6f8e5',
  textPrimary: '#044e07',
  textSecondary: 'rgba(133,65,133,0.5)',
  divider: 'rgba(140,95,177,0.12)',
  buttonColor: 'white',
  buttonBorder: '#ba6',
}
const desktopWidth = '800px'

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
          '@fontFace': ['Flower', 'Royal'],
        },
        body: {
          backgroundImage: `${COLORS.backgroundPrimaryGradient}, url(${CONSTANTS.cloudinaryBackgroundLink}/greenMobile)`,
          '@media (orientation: landscape)': {
            backgroundImage: `${COLORS.backgroundPrimaryGradient}, url(${CONSTANTS.cloudinaryBackgroundLink}/greenDesktop)`,
          },
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "100vh",
        },
        'body a': {
          textDecoration: 'none'
        },
        '.menu': {
          display: 'flex',
          padding: '8px 16px',
          justifyContent: 'space-between',
        },
        '.menu_main': {
          display: 'flex',
          justifyContent: 'space-between',
          width: 120,
          [`@media (min-width:${desktopWidth})`]: {
            width: 370, 
          }
        },
        '.menu span': {
          display: 'none',
          [`@media (min-width:${desktopWidth})`]: {
            display: 'inline',
          }
        },
        '.menu svg': {
          width: 40,
          height: 40,
          [`@media (min-width:${desktopWidth})`]: {
            marginRight: 10,
          }
        },
        '.menu .menu_item': {
          display: 'flex',
          alignItems: 'center',
          background: COLORS.backgroundGradientTransparent,
          color: COLORS.buttonColor,
          borderRadius: 5,
          padding: 5,
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          border: `1px solid ${COLORS.buttonBorder}`,
          fontSize: '1.5em',
        },
        '.swiper-button-next::after, .swiper-button-prev::after' : {
          background: COLORS.buttonGradient,
          padding: 10,
          borderRadius: 10,
          color: COLORS.secondaryText,
        },
        '.spell_wand': {
          color: COLORS.icon,
          width: 30,
          height: 30,
          padding: 9,
          borderBottomLeftRadius: 30,
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
          width: 150,
          height: 150,
          color: COLORS.buttonColor,
          background: COLORS.backgroundGradientTransparent,
          borderRadius: 5,
        },
        '.close' : {
          color: COLORS.buttonColor,
          width: 30,
          height: 30,
          background: COLORS.backgroundGradientTransparent,
          borderRadius: 5,
          padding: 3, 
        },
        '.inner_list': {
          [`@media (min-width:${desktopWidth})`]: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            'li.MuiListItem-root': {
              width: 'calc((100% - 20px)/3)',
              marginRight: 6,
            }
          }, 
        },
        '.settings_control': {
          padding: 10,
          marginTop: 10,
          [`@media (min-width:${desktopWidth})`]: {
            background: COLORS.backgroundSecondaryGradient, 
            backgroundColor: 'transparent',
          },
        },
        '.theme_select': {
          marginLeft: 16,
        },
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
          borderRadius: 5,
          padding: '10px 25px',
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
          border: `1px solid ${COLORS.buttonBorder}`,
          background: COLORS.buttonGradient,
        },
        outlined: {
          border: `1px solid ${COLORS.buttonBorder}`,
          borderRadius: 5,
          padding: '0 10px',
          margin: '0 10px',
          color: COLORS.outlinedText,
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: 'inset 0px 1px 0px rgba(255,255,255,1), 0px 1px 3px rgba(0,0,0,0.3)',
        },
        endIcon: {
          width: 25,
          height: 25,
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
          borderRadius: 10,
          maxWidth: 350,
          color: COLORS.primaryText,
          fontSize: '1.5rem',
          fontWeight: 400,
        },
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
          border: `1px solid ${COLORS.buttonBorder}`,
          borderRadius: 5,
          marginBottom: 4,
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
          padding: 16,
          position: 'relative',
          border: `3px solid ${COLORS.buttonBorder}`,
          borderRadius: 5,
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
      marginTop: 10,
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
      borderRadius: 5,
      padding: 5,
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
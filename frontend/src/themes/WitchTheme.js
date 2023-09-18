import { createTheme } from "@mui/material/styles";
import { CONSTANTS } from "./../constants"

const COLORS = {
  name: 'witch',
  borderGradient: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  headerText: `url(${CONSTANTS.cloudinaryBackgroundLink}/woodVertTexture) #ab9f76`,
  buttonGradient: `linear-gradient(90deg, #007011, #354906, #26631a, #2a7707)`,
  backgroundGradientTransparent: 'linear-gradient(to bottom, rgb(3 115 13 / 90%), rgb(131 253 137 / 90%))',
  backgroundSecondaryGradient: 'linear-gradient(to right, #2e0262 50%, transparent)',
  backgroundPrimaryGradient: 'linear-gradient(to bottom, rgb(36 10 58 / 80%), rgb(1 31 9 / 60%))',
  icon: '#5e460b',
  outlinedText: '#614d0c',
  primaryMain: '#71c067',
  primaryText: '#4ba04b',
  secondaryText: '#182d19',
  secondaryMain: '#fdd835',
  backgroundDefault: '#2e0262',
  backgroundPaper: '#1b0239',
  textPrimary: '#7f9a80',
  textSecondary: 'rgba(133,65,133,0.5)',
  divider: 'rgba(140,95,177,0.12)',
  buttonColor: '#dcfaa8',
  buttonTextShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #3fe600, 0 0 40px #5fe600, 0 0 50px #7fe600, 0 0 60px #74e600, 0 0 70px #7be600',
  headerTextShadow: '0 0 10px #f5e991, 0 0 30px #3fe600, 0 0 40px #5fe600',
  buttonBorder: '#ba6',
}
const desktopWidth = '800px'
const cursor = "url('/cursors/skeleton.svg'), auto"
const hovers = {
  buttonHover: {
    boxShadow: '0 0 10px white, 0 0 20px green, 0 0 30px green',
  },
  cardHover: {
    boxShadow: '0 0 10px white, 0 0 20px green, 0 0 30px green', 
  }
}


export default createTheme({
  palette: {
    mode: 'dark',
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
          backgroundImage: `${COLORS.backgroundPrimaryGradient}, url(${CONSTANTS.cloudinaryBackgroundLink}/${COLORS.name}Mobile)`,
          '@media (orientation: landscape)': {
            backgroundImage: `${COLORS.backgroundPrimaryGradient}, url(${CONSTANTS.cloudinaryBackgroundLink}/${COLORS.name}Desktop)`,
          },
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height: "100vh",
        },
        'body a': {
          textDecoration: 'none',
          cursor: cursor,
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
            width: 400, 
          }
        },
        '.menu span': {
          display: 'none',
          [`@media (min-width:${desktopWidth})`]: {
            display: 'inline',
          }
        },
        '.menu .menu_item': {
          display: 'flex',
          alignItems: 'center',
          background: COLORS.buttonGradient,
          color: COLORS.buttonColor,
          borderRadius: '39% 61% 34% 66% / 52% 45% 55% 48%',
          padding: '5px 10px',
          boxShadow: '0 0 10px green',
          textShadow: COLORS.buttonTextShadow,
          fontSize: '1.5em',
          cursor: cursor,
          ':hover': hovers.buttonHover,
          '::before': {
            content: '""',
            display:'block',
            height: 30,
            width: 30,
            backgroundColor: COLORS.buttonColor,
            backgroundSize: '30px 30px',
            backgroundRepeat: 'no-repeat',
            [`@media (min-width:${desktopWidth})`]: {
              marginRight: 5,
            }
          }
        },
        '.menu .menu_item__home::before': {
          maskImage: 'url(sprite.svg#rip-view)',
        },
        '.menu .menu_item__create::before': {
          maskImage: 'url(sprite.svg#caulduron-view)',
        },
        '.menu .menu_item__settings::before': {
          maskImage: 'url(sprite.svg#crown-view)',
        },
        '.swiper-wrapper': { 
          paddingTop: 8, 
        },
        '.swiper-button-next::after, .swiper-button-prev::after' : {
          background: COLORS.buttonGradient,
          padding: 10,
          borderRadius: 10,
          color: COLORS.secondaryText,
        },
        '.swiper-slide': {
          cursor: cursor,
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
          '::before': {
            content: '""',
            display:'block',
            height: 150,
            width: 150,
            backgroundColor: COLORS.buttonColor,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'no-repeat',
            backgroundImage: COLORS.backgroundGradientTransparent,
            maskImage: 'url(sprite.svg#bats-view)',
          }
        },
        '.tale_container': {
            height: '100vh', 
            backgroundColor: COLORS.backgroundDefault,
        },
        '.close' : {
          color: COLORS.buttonColor,
          width: 30,
          height: 30,
          background: COLORS.buttonGradient,
          borderRadius: 5,
          padding: 3, 
          cursor: cursor,
          ':hover': hovers.buttonHover,
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
        '.library_controls': {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: COLORS.headerText,
          backgroundClip: 'text',
          color: 'transparent',
          cursor: cursor,
          transition: '.5s ease',
          'svg': {
            width: 20,
            height: 20,
          }
        },
        text: {
          background: COLORS.headerText,
          backgroundClip: 'text',
          color: 'transparent',
          ':hover': {
            color: COLORS.primaryText,
          }
        },
        contained: {
          color: COLORS.buttonColor,
          borderRadius: '39% 61% 34% 66% / 52% 45% 55% 48%',
          padding: '10px 25px',
          textShadow: COLORS.buttonTextShadow,
          boxShadow: '0 0 10px green',
          background: COLORS.buttonGradient,
          ':hover': hovers.buttonHover,
        },
        outlined: {
          borderRadius: '39% 61% 34% 66% / 52% 45% 55% 48%',
          padding: '0 10px',
          margin: '0 10px',
          color: COLORS.outlinedText,
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          boxShadow: '0 0 10px green',
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
          marginBottom: 50
        }
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
          boxShadow: '0 0 10px green',
          position: 'relative',
          ':hover': hovers.cardHover
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
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          cursor: cursor,
        },
      }  
    },
    MuiButtonBase: {
      styleOverrides: {
        thumb: {
          cursor: cursor,
        },
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
      textShadow: COLORS.headerTextShadow,
      fontFamily: 'Spooky',
      lineHeight: 1,
      color: COLORS.secondaryText,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: COLORS.buttonColor,
      textShadow: COLORS.buttonTextShadow,
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
    h4: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: COLORS.primaryText,
      marginBottom: 10,
    },
    body2: {
      '::first-letter': {
        color: COLORS.secondaryText,
        fontFamily: 'Scary',
        textShadow: COLORS.headerTextShadow,
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
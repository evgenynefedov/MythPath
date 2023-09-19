import { createTheme } from "@mui/material/styles";
import { CONSTANTS } from "./../constants"

const COLORS = {
  name: 'cyber',
  buttonGradient: `linear-gradient(#d286ce, #ed22d1)`,
  buttonShadow: '0 0 10px white, 0 0 30px #d286ce, 0 0 40px #d286ce',
  backgroundGradientTransparent: 'linear-gradient(to bottom, rgb(0 0 0 / 90%), rgb(0 0 0 / 90%))',
  backgroundSecondaryGradient: 'linear-gradient(to right, #2e0262 50%, transparent)',
  backgroundPrimaryGradient: 'linear-gradient(to bottom, rgb(0 0 0 / 80%), rgb(0 0 0 / 60%))',
  icon: '#12741a',
  outlinedText: '#0f8c32',
  primaryMain: '#71c067',
  primaryText: '#4ba04b',
  secondaryText: '#21aa27',
  secondaryMain: '#fdd835',
  backgroundDefault: 'black',
  backgroundPaper: 'black',
  textPrimary: '#7f9a80',
  textSecondary: '#69b427',
  buttonColor: '#21aa27',
  buttonTextShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #3fe600, 0 0 40px #5fe600, 0 0 50px #7fe600, 0 0 60px #74e600, 0 0 70px #7be600',
  headerTextShadow: '0 0 10px #f5e991, 0 0 30px #21aa27, 0 0 40px #21aa27',
  buttonBorder: '#21aa27',
}
const desktopWidth = '800px'
const cursor = "url('/cursors/robot.svg'), auto"
const clipCorner = 'polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%)'
const clips = [
  '',
  'polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%)',
  'polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%)',
  'polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%)',
  'polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0)',
  'polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0)',
  'polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%)',
  'polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%)'
]
const shimmy = 5
const hovers = {
  buttonHover: {
    boxShadow: '0 0 10px white, 0 0 20px #5adac6, 0 0 30px #5adac6',
  },
  cardHover: {
    boxShadow: '0 0 10px white, 0 0 20px #21aa27, 0 0 30px #21aa27', 
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
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
          color: COLORS.buttonColor,
          padding: '5px 10px',
          fontSize: '1.5em',
          cursor: cursor,
          border: `3px solid ${COLORS.buttonBorder}`,
          position: 'relative',
          boxSizing: 'border-box',
          ':hover': {
            '::after': {
              display: 'block',
              animation: 'glitch 2s infinite'
            }
          },
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
          },
          '::after': {
            content: '""',
            position: 'absolute',
            display: 'none',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
          },
          'span::after': {
            content: '"_"',
          }
        },
        '.menu .menu_item__home': {
          '::before': {
            maskImage: 'url(sprite.svg#rabbit-view)',
          }
        },
        '.menu .menu_item__create::before': {
          maskImage: 'url(sprite.svg#mouse-view)',
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
        '.library_controls': {
          display: 'flex',
          justifyContent: 'space-between'
        },
        '@keyframes glitch': {
          '0%': {
            clipPath: clips[1]
          },
          '2%, 8%': {
            clipPath: clips[2],
            transform: `translate(calc(${shimmy} * -1%), 0)`,
          },
          '6%': {
            clipPath: clips[2],
            transform: `translate(calc(${shimmy} * 1%), 0)`
          },
          '9%': {
            clipPath: clips[2],
            transform: 'translate(0, 0)'
          },
          '10%': {
            clipPath: clips[3],
            transform: `translate(calc(${shimmy}) * 1%), 0)`
          },
          '13%': {
            clipPath: clips[3],
            transform: 'translate(0, 0)'
          },
          '14%, 21%': {
            clipPath: clips[4],
            transform: `translate(calc(${shimmy} * 1%), 0)`
          },
          '25%': {
            clipPath: clips[5],
            transform: `translate(calc(${shimmy} * 1%), 0)`
          },
          '30%': {
            clipPath: clips[5],
            transform: `translate(calc(${shimmy} * -1%), 0)`
          },
          '35%, 45%': {
            clipPath: clips[6],
            transform: `translate(calc(${shimmy} * -1%))`
          },
          '40%': {
            clipPath: clips[6],
            transform: `translate(calc(${shimmy} * 1%))`
          },
          '50%': {
            clipPath: clips[6],
            transform: 'translate(0, 0)'
          },
          '55%': {
            clipPath: clips[7],
            transform: `translate(calc(${shimmy} * 1%), 0)`
          },
          '60%': {
            clipPath: clips[7],
            transform: 'translate(0, 0)'
          },
          '31%, 61%, 100%': {
            clipPath: clips[4]
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: cursor,
          transition: '.5s ease',
          'svg': {
            width: 20,
            height: 20,
          }
        },
        text: {
          ':hover': {
            color: COLORS.primaryText,
          }
        },
        contained: {
          color: COLORS.buttonColor,
          padding: '10px 25px',
          textShadow: COLORS.buttonTextShadow,
          boxShadow: '0 0 10px green',
          background: COLORS.buttonGradient,
          clipPath: clipCorner,
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            clipPath: 'polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)',
            zIndex: -1,
          },
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
          boxShadow: '0 0 10px white, 0 0 20px #21aa27',
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
    MuiSelect: {
        styleOverrides: {
          outlined: {
            padding: 10,
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
      fontFamily: 'Computo',
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
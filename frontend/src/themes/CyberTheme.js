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
  backgroundDefault: '#000',
  backgroundPaper: '#000',
  textPrimary: '#7f9a80',
  textSecondary: '#69b427',
  buttonColor: '#21aa27',
  buttonTextShadow: '0 0 10px #fff, 0 0 20px #3fe600',
  headerTextShadow: '0 0 10px #f5e991, 0 0 30px #21aa27, 0 0 40px #21aa27',
  buttonBorder: '#21aa27',
}
const desktopWidth = '800px'
const cursor = "url('/cursors/robot.svg'), auto"
const clipCorner = {
  buhton: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 70%)',
  card: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%)'
}
const clips = [
  '',
  'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)',
  'polygon(0 78%, 100% 78%, 100% 100%, 0 100%)',
  'polygon(0 54%, 100% 54%, 100% 44%, 0 44%)',
  'polygon(0 0, 0 0, 0 0, 0 0)',
  'polygon(0 60%, 100% 60%, 100% 40%, 0 40%)',
  'polygon(0 85%, 100% 85%, 100% 40%, 0 40%)',
  'polygon(0 63%, 100% 63%, 100% 80%, 0 80%)',
  'polygon(0 10%, 100% 10%, 100% 0, 0 0)'
]
const hovers = {
  buttonHover: {
    '::after': {
      [`@media (min-width:${desktopWidth})`]: {
        display: 'block',
        animation: 'glitch 2s infinite'
      }
    }
  },
  buttonAfter: {
    content: '""',
    position: 'absolute',
    display: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.backgroundDefault,
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
          },
          '::after': hovers.buttonAfter,
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
          background: COLORS.backgroundDefault,
          padding: 10,
          borderRadius: 0,
          border: `3px solid ${COLORS.buttonBorder}`,
          color: COLORS.primaryText,
          cursor: cursor,
        },
        '.swiper-slide': {
          cursor: cursor,
          padding: 3,
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 'calc((100% - 306px) / 2)',
            width: 'calc(100% - 6px)',
            height: '100%',
            maxWidth: 306,
            backgroundColor: COLORS.buttonColor,
            clipPath: clipCorner.card,
            zIndex: -1,
          },
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
            maskImage: 'url(sprite.svg#matrix-view)',
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
          borderRadius: 0,
          padding: 3, 
          cursor: cursor,
          border: `2px solid ${COLORS.buttonBorder}`,
          ':hover': hovers.buttonHover,
          '::after': hovers.buttonAfter,
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
            opacity: 1,
            transform: 'translateZ(0)',
            clipPath: clips[1]
          },
          '2%, 8%': {
            clipPath: clips[2],
            transform: `translate(-5px)`,
          },
          '6%': {
            clipPath: clips[2],
            transform: `translate(5px)`
          },
          '9%': {
            clipPath: clips[2],
            transform: 'translate(0, 0)'
          },
          '10%': {
            clipPath: clips[3],
            transform: `translate3d(5px, 0, 0)`
          },
          '13%': {
            clipPath: clips[3],
            transform: 'translateZ(0)'
          },
          '13.1%': {
            clipPath: clips[4],
            transform: 'translate3d(5px, 0, 0)'
          },
          '15%': {
            clipPath: clips[5],
            transform: `translate3d(5px, 0, 0)`
          },
          '20%': {
            clipPath: clips[5],
            transform: `translate3d(-5px, 0, 0)`
          },
          '20.1%': {
            clipPath: clips[4],
            transform: `translate3d(5px, 0, 0)`
          },
          '25%': {
            clipPath: clips[6],
            transform: `translate3d(5px, 0, 0)`
          },
          '30%': {
            clipPath: clips[6],
            transform: `translate3d(-5px, 0, 0)`
          },
          '30.1%': {
            clipPath: clips[4],
          },
          '35%': {
            clipPath: clips[7],
            transform: `translate(-5px)`
          },
          '40%': {
            clipPath: clips[7],
            transform: 'translate(5px)'
          },
          '50%': {
            clipPath: clips[7],
            transform: 'translate(0, 0)',
          },
          '55%': {
            clipPath: clips[8],
            transform: 'translate3d(5px, 0, 0)',
          },
          '60%': {
            clipPath: clips[8],
            transform: 'translateZ(0)',
            opacity: 1,
          },
          '60.1%': {
            clipPath: clips[4],
            opacity: 1,
          },
          'to': {
            clipPath: clips[4],
            opacity: 1,
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: cursor,
          borderRadius: 0,
          'svg': {
            width: 20,
            height: 20,
          },
          ':hover': {
            background: 'transparent',
          },
          '::after': hovers.buttonAfter,
        },
        text: {
          ':hover': {
            color: COLORS.primaryText,
          }
        },
        contained: {
          color: COLORS.buttonColor,
          padding: '10px 25px',
          boxShadow: '0 0 10px green',
          border: `3px solid ${COLORS.buttonBorder}`,
          background: 'transparent',
          ':hover': hovers.buttonHover,
          '::after': hovers.buttonAfter,
        },
        outlined: {
          borderRadius: 0,
          padding: '0 10px',
          margin: '0 10px',
          color: COLORS.outlinedText,
          border: `3px solid ${COLORS.buttonBorder}`,
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
          borderRadius: 0,
          marginBottom: 4,
          backgroundColor: COLORS.backgroundDefault,
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          position: 'relative',
          minWidth: 306,
          '::before': {
            content: '""',
            position: 'absolute',
            top: 12,
            left: 12,
            width: 308,
            height: 'calc(100% - 8px)',
            backgroundColor: COLORS.buttonColor,
            clipPath: clipCorner.card,
            zIndex: -2,
          },
        },
        
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          textShadow: '0px -1px 0px rgba(0,0,0,0.4)',
          borderRadius: 0,
          position: 'relative',
          clipPath: clipCorner.card,
          width: 300,
          'a': {
            ':hover': hovers.buttonHover,
            '::after': hovers.buttonAfter,
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            backgroundColor: COLORS.backgroundDefault,
          }
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
          borderRadius: 0,
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
      fontSize: '1.5rem',
      [`@media (min-width:${desktopWidth})`]: {
        fontSize: '2rem', 
      },
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
        fontFamily: 'Cyber',
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
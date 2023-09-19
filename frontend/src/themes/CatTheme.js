import { createTheme } from "@mui/material/styles";

const COLORS = {
  name: 'cat',
  borderGradient: 'radial-gradient(ellipse farthest-corner at right bottom, #fbdd4a 0%, #fdd788 13%, #cfb681 44%, #cfb372 56%, #a69c84 80%)',
  textShadow: '2px 2px 0px #FFB650, 4px 4px 0px #FFD662, 6px 6px 0px  #FF80BF, 8px 8px 0px #EF5097, 10px 10px 0px #6868AC, 12px 12px 5px #6868AC',
  headerText: '#eea100',
  buttonGradient: 'linear-gradient(to right, hsl(227,65%,75%), hsl(277,50%,65%))',
  buttonBackGradient: 'linear-gradient(to left, hsl(227,65%,75%), hsl(277,50%,65%))',
  backgroundGradientTransparent: 'linear-gradient(to bottom, rgb(191 125 223 / 70%), rgb(231 209 255 / 70%))',
  backgroundSecondaryGradient: 'linear-gradient(to right, #ede4fb 50%, transparent)',
  backgroundPrimaryGradient: 'linear-gradient(to bottom, rgba(254, 224, 236, 0.8), rgba(253, 231, 239, 0.6))',
  borderRepeatingGradient: 'repeating-linear-gradient( -45deg, #ece2ae, #b69552 5px, rgb(197 168 108 / 80%) 6px, rgb(169 146 62 / 80%) 10px) 25',
  icon: '#6e3293',
  outlinedText: '#614d0c',
  primaryMain: '#F187D2',
  primaryText: '#964c96',
  secondaryText: '#fff8e1',
  secondaryMain: '#fdd835',
  backgroundDefault: '#ede4fb',
  backgroundPaper: '#e0e1fc',
  textPrimary: '#5e0724',
  textSecondary: '#f3f0ad',
  buttonColor: 'white',
  buttonBorder: '#ba6',
  buttonShadow: "16px 16px 32px 0 hsl(277deg 50% 65% / 50%), inset -16px -16px 32px 0 hsl(277deg 49.43% 38.7%), inset 8px 8px 16px 0 hsl(227deg 67.75% 82.24% / 90%)",
  mainShadow: '34px 34px 68px hsl(199.01deg 10% 50%), inset -8px -8px 16px hsl(229.99deg 20% 50% / 70%), inset 0px 14px 28px hsl(120deg 20% 95%); '
}
const desktopWidth = '800px'
const cursor = "url('/cursors/fish.svg'), auto"
const hovers = {
  buttonHover: {
    background: COLORS.buttonBackGradient,
  },
  cardHover: {
    transform: 'translateY(-8px)', 
  }
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
        },
        '.menu span': {
          display: 'none',
        },
        '.menu .menu_item': {
          display: 'flex',
          alignItems: 'center',
          background: COLORS.buttonGradient,
          color: COLORS.buttonColor,
          borderRadius: 25,
          padding: 10,
          boxShadow: COLORS.buttonShadow,
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
          }
        },
        '.menu .menu_item__home::before': {
          maskImage: 'url(sprite.svg#condo-view)',
        },
        '.menu .menu_item__create::before': {
          maskImage: 'url(sprite.svg#paw-view)',
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
          transition: '.3s ease',
          cursor: cursor,
          ':hover': hovers.cardHover,
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
            maskImage: 'url(sprite.svg#cat-view)',
          },
          '::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            boxShadow: COLORS.mainShadow,
            borderRadius: 25,
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
          boxShadow: COLORS.buttonShadow,
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
        '.theme_select': {
          marginLeft: 16,
        },
        '.library_controls': {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: 25,
                boxShadow: COLORS.mainShadow
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
          color: COLORS.headerText,
          ':hover': hovers.cardHover,
        },
        contained: {
          color: COLORS.buttonColor,
          borderRadius: 25,
          padding: '10px 25px',
          boxShadow: COLORS.buttonShadow,
          background: COLORS.buttonGradient,
          ':hover': hovers.buttonHover,
        },
        outlined: {
          border: `1px solid ${COLORS.buttonBorder}`,
          borderRadius: 5,
          padding: '0 10px',
          margin: '0 10px',
          color: COLORS.headerText,
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
          paddingBottom: 10,
        },
      }
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          ':hover': hovers.cardHover
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
          background: 'transparent',
        },
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
          borderRadius: 25,
          marginBottom: 4,
          boxShadow: COLORS.mainShadow,
          backgroundColor: COLORS.backgroundDefault,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderRadius: 25,
          cursor: cursor,
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
          borderRadius: 25,
          backgroundColor: COLORS.backgroundDefault,
          '::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            boxShadow: COLORS.mainShadow,
            borderRadius: 25,
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: 16,
          color: COLORS.textPrimary,
        },
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
      fontSize: '6rem',
      fontWeight: 400,
      textShadow: COLORS.textShadow,
      color: COLORS.textSecondary,
      fontFamily: 'Fluffy',
      lineHeight: 0.7,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400, 
      color: COLORS.headerText,
      marginBottom: 10,
      textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
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
        color: COLORS.icon,
        fontFamily: 'Catpaw',
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
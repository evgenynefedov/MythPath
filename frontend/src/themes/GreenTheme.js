import { createTheme } from "@mui/material/styles";

export default createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#4db53f',
        },
        secondary: {
          main: '#309214',
        },
        background: {
          default: '#d1f7c2',
          paper: '#b5f39f',
        },
    },
    typography: {
        h1: {
          fontSize: '2rem',
          fontWeight: 400,
        },
        h2: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        body2: {
          '::first-letter': {
            color: '#cfb681',
          }
        }
      },
});
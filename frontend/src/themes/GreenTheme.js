import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ba55d8',
      contrastText: '#500050',
    },
    secondary: {
      main: '#f9a8e8',
      contrastText: '#855685',
    },
    background: {
      default: '#f934f8',
      paper: '#f76ef4',
    },
    text: {
      primary: 'rgba(133,65,133,0.87)',
      secondary: 'rgba(133,65,133,0.5)',
    },
    divider: 'rgba(140,95,177,0.12)',
  },
});
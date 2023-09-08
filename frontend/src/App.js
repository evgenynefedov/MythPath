import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./Utils/themeOptions";
import Onboarding from "./components/onboarding/Onboarding";
import Wizard from "./components/wizard/Wizard";
import TaleLoader from "./components/tale-loader/TaleLoader";
import TaleViewer from "./components/tale-viewer/TaleViewer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Box } from "@mui/material";

function App({ signOut, user }) {
  const theme = createTheme(themeOptions);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box textAlign="center" sx={{ m: 2 }}>
          {user.attributes.email}
          <button onClick={signOut}>Sign Out</button>
        </Box>

        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="/tale-loader" element={<TaleLoader />} />
            <Route path="/tale-viewer/:id" element={<TaleViewer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default withAuthenticator(App);

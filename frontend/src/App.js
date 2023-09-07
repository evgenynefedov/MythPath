import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./Utils/themeOptions";
import Onboarding from "./components/onboarding/Onboarding";
import Wizard from "./components/wizard/Wizard";
import TaleLoader from "./components/tale-loader/TaleLoader";
import TaleViewer from "./components/tale-viewer/TaleViewer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme(themeOptions);

  return (
    <>
      <ThemeProvider theme={theme}>
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

export default App;

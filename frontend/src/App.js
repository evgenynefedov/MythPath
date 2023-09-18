import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { themeOptions } from "./Utils/themeOptions";
import Onboarding from "./components/onboarding/Onboarding";
import Wizard from "./components/wizard/Wizard";
import TaleLoader from "./components/tale-loader/TaleLoader";
import TaleViewer from "./components/tale-viewer/TaleViewer";
import MainMenu from "./components/common/MainMenu";
import Settings from "./components/common/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { getSelectedTheme, getThemebyName } from "./services/settingsStorage";

function App() {
  let [theme, setTheme] = useState(getSelectedTheme());
  function changeTheme(themeName) {
    setTheme(getThemebyName(themeName));
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route element={<MainMenu changeTheme={changeTheme}/>}>
              <Route path="/" element={<Onboarding />} />
              <Route path="/wizard" element={<Wizard />} />
              <Route path="/tale-loader" element={<TaleLoader />} />
            </Route>
            <Route path="/tale-viewer/:taleId" element={<TaleViewer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

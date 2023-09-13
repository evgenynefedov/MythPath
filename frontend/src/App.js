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
import PinkTheme from "./themes/PinkTheme"
// import GreenTheme from "./themes/GreenTheme"

function App() {
	let [theme, setTheme] = useState(PinkTheme)
  let [themeName, setThemeName] = useState("Little princess")
	function changeTheme(theme, themeName) {
		setTheme(theme)
    setThemeName(themeName)
	}
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route element={<MainMenu />}>
              <Route path="/" element={<Onboarding />} />
              <Route path="/wizard" element={<Wizard />} />
              <Route path="/tale-loader" element={<TaleLoader />} />
              <Route path="/settings" element={<Settings changeTheme={changeTheme} selectedThemeName={themeName} />} />
            </Route>
            <Route path="/tale-viewer/:taleId" element={<TaleViewer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

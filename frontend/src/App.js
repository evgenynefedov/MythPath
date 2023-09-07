import "./App.css";
import Onboarding from "./components/onboarding/Onboarding";
import Wizard from "./components/wizard/Wizard";
import TaleLoader from "./components/tale-loader/TaleLoader";
import TaleViewer from "./components/tale-viewer/TaleViewer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/tale-loader" element={<TaleLoader />} />
        <Route path="/tale-viewer/:id" element={<TaleViewer />} />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);

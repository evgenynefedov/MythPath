import "./App.css";
import Onboarding from "./components/onboarding/Onboarding";
import Wizard from "./components/wizard/Wizard";
import TaleLoader from "./components/tale-loader/TaleLoader";
import TaleViewer from "./components/tale-viewer/TaleViewer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/wizard" element={<Wizard />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/tale-loader" element={<TaleLoader />} />
      <Route path="/tale-viewer" element={<TaleViewer />} />
    </Routes>
  );
}

export default App;

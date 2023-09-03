import "./App.css";
import Onboarding from "./components/onboarding/Onboarding";
import Wizard from "./components/wizard/Wizard";
import TaleLoader from "./components/tale-loader/TaleLoader";
import TaleViewer from "./components/tale-viewer/TaleViewer";
import SpellItem from "./components/wizard/SpellItem" 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
	<Router>
		<Routes>
			<Route path="/wizard" element={<Wizard />} />
			<Route path="/onboarding" element={<Onboarding />} />
			<Route path="/tale-loader" element={<TaleLoader />} />
			<Route path="/tale-viewer" element={<TaleViewer />} />
		</Routes>
	</Router>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);

reportWebVitals();

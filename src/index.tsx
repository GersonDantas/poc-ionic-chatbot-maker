import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCubes, faThLarge, faRobot } from "@fortawesome/free-solid-svg-icons"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

library.add(faCubes, faThLarge, faRobot)

serviceWorkerRegistration.unregister();

reportWebVitals();

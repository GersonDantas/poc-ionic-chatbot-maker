import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { IonReactHashRouter } from '@ionic/react-router';


ReactDOM.render(
  <React.StrictMode>
    <IonReactHashRouter
      basename="/"
    >
      <App />
    </IonReactHashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();

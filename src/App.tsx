import { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import Menu from "./components/Menu";
import Page from "./pages/PageToPages";
import GlobalStyles from "./theme/GlobalStyles";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <IonApp>
      <GlobalStyles />

      <IonReactRouter>
        <IonSplitPane
          disabled={isLoginPage}
          contentId="main"
          when="(min-width: 1025px)"
        >
          <Menu />

          <IonRouterOutlet id="main">
            <Route path="/" component={LoginPage} />
            <Redirect exact to="/" />
            <Route
              path="/page/:name"
              exact={true}
              render={() => {
                setIsLoginPage(false);
                return <Page />;
              }}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

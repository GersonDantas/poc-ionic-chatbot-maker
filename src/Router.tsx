import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { MenuNavigation } from './components';
import { PageToPage, LoginPage } from './pages';
import { useGlobalContextData } from './store';

const Router: React.FC = function () {
  const { isLoginPage } = useGlobalContextData();

  return (
    <IonReactRouter>

      <IonSplitPane
        disabled={isLoginPage}
        contentId="main"
        when="(min-width: 1025px)"
      >

        <MenuNavigation />

        <IonRouterOutlet id="main">

          <Route path="/" component={LoginPage} />

          <Redirect exact to="/" />

          <Route
            path="/page/:name"
            exact
            render={(pageProps) => (<PageToPage {...pageProps} />)}
          />

        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Router;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { PageToPage, LoginPage } from './pages';
import { MenuNavigation } from './components';
import { useGlobalContextData } from './store';

const Router: React.FC = () => {
  const {isLoginPage} = useGlobalContextData();

  return (
    <IonReactRouter >

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
            exact={true}
            render={(pageProps) => {
              return (<PageToPage {...pageProps}  />);
            }}
          />

        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  )
}

export default Router;
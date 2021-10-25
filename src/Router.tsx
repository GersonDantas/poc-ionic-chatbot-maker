import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import MenuNavigation from './components/MenuNavigation';
import LoginPage from './pages/LoginPage';
import Page from './pages/PageToPages';

const Router: React.FC = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

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
          exact={true}
          render={() => {
            setIsLoginPage(false);
            return <Page />;
          }}
        />
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>
  )
}

export default Router;
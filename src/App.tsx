import { IonApp } from '@ionic/react';
import React from 'react';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import Router from './Router';
import { GlobalContextProvider } from './store';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = function () {
  return (
    <IonApp>
      <GlobalContextProvider>
        <GlobalStyles />
        <Router />
      </GlobalContextProvider>
    </IonApp>
  );
};

export default App;

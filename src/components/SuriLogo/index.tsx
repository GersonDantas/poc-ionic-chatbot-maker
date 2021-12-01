import { IonCol, IonImg } from '@ionic/react';
import React from 'react';
import logoBlue from 'src/assets/img/logo-blue.png';
import logoWhite from 'src/assets/img/logo-white.png';
import { useGlobalContextData } from 'src/store';
import { IonImgProps } from 'src/types';

import { MyIonRow } from './styles';

type SuriLogoProps = {
  columnSize?: string;
} & IonImgProps;

const SuriLogo: React.FC<SuriLogoProps> = function (props) {
  const { isDark } = useGlobalContextData();
  const [logo, setLog] = React.useState<string>();
  const { columnSize = '' } = props;

  React.useEffect(() => {
    toggleLogo();
  }, [isDark]);

  const toggleLogo = () => {
    if (isDark) {
      setLog(logoWhite);
    } else {
      setLog(logoBlue);
    }
  };

  SuriLogo.defaultProps = {
    columnSize: '',
  };

  return (
    <MyIonRow>
      <IonCol size={columnSize}>
        <IonImg src={logo} {...props} />
      </IonCol>
    </MyIonRow>
  );
};

export { SuriLogo };

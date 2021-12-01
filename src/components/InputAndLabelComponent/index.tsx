import { IonRow } from '@ionic/react';
import { InputAndLabelComponentProps } from 'src/types';

import { MyIonInputStyled, MyIonLabel } from '../MyIonComonsStyleds';
import { ColInputAndLabel } from './styles';

const InputAndLabelComponent = function (props: InputAndLabelComponentProps) {
  const {
    label, touched, spanError,
  } = props;
  return (
    <IonRow>
      <ColInputAndLabel>
        {label && <MyIonLabel position="stacked">{label}</MyIonLabel>}

        <MyIonInputStyled
          className={touched && spanError ? 'input-error' : ''}
          {...props}
        />
        {(touched && spanError) && <span className="span-error">{spanError}</span>}
      </ColInputAndLabel>
    </IonRow>
  );
};

export { InputAndLabelComponent };

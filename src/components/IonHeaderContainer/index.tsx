/* eslint-disable react/require-default-props */
import {
  IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
} from '@ionic/react';
import { ReactNode } from 'react';

interface SelectAdaptiveDatePickerProps {
    name: string;
    children?: ReactNode | undefined;
}

const IonHeaderContainer = function (props: SelectAdaptiveDatePickerProps) {
  const { name, children } = props;

  return (
    <IonHeader>
      <IonToolbar style={{ display: 'flex' }}>

        {children || (
        <>
          <IonTitle color="primary" style={{ textTransform: 'capitalize' }}>{name}</IonTitle>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export { IonHeaderContainer };

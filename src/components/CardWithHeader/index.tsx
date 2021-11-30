import { IonCardContent, IonCardHeader } from '@ionic/react';
import type{ CardWithHeaderProps } from 'src/types';

import { IonCardHeaderContentRow, IonCardHeaderTitle, RowCardHeader } from './styles';
import CommonIconButtonStyled from './CommonIconButtonStyled';

import { IonCardWithHeader } from '..';

const CardWithHeader = function (props: CardWithHeaderProps) {
  const {
    cardTitle, children, hasIcon, titleInCenter,
  } = props;

  return (
    <IonCardWithHeader className="border-radius-5">
      <IonCardHeader color="primary">
        <RowCardHeader style={{ justifyContent: titleInCenter ? 'center' : 'space-between' }}>

          <IonCardHeaderTitle>{cardTitle}</IonCardHeaderTitle>

          {hasIcon && <CommonIconButtonStyled />}

        </RowCardHeader>
      </IonCardHeader>

      <IonCardContent>
        <IonCardHeaderContentRow>{children}</IonCardHeaderContentRow>
      </IonCardContent>

    </IonCardWithHeader>
  );
};

export { CardWithHeader };

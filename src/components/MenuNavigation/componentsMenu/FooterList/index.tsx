import { useIonViewWillEnter } from '@ionic/react';
import * as History from 'history';
import { chevronForwardOutline } from 'ionicons/icons';
import { useState } from 'react';
import { getStorageKey } from 'src/hooks';
import { useGlobalContextData } from 'src/store';
import { User } from 'src/store/dto';
import { users } from 'src/store/mocUsers';
import { IonAvatarStyled, MenuListItem } from '..';
import { ListFooter } from './styles';

interface FooterListProps {
  location: History.Location;
}

function FooterList({ location }: FooterListProps) {
  const { userConnected } = useGlobalContextData();

  return (
    <ListFooter>
      <MenuListItem
        button
        lines="none"
        detail
        detailIcon={chevronForwardOutline}
        title={`${userConnected?.name} ${userConnected?.subName}`}
        location={location}
        noUppercase
      >
        <IonAvatarStyled>
          <img src={userConnected?.imgUserUrl} alt={userConnected?.email} />
        </IonAvatarStyled>
      </MenuListItem>
      <MenuListItem
        href="https://chatbotmaker.gitbook.io/centraldeajuda/"
        target="_blank"
        lines="none"
        title="CENTRAL DE AJUDA"
        location={location}
      >
        <i className="cb-question-mark" />
      </MenuListItem>
    </ListFooter>
  );
};

export { FooterList };

import { useIonViewDidEnter } from '@ionic/react';
import * as History from 'history';
import { chevronForwardOutline } from 'ionicons/icons';
import { useState } from 'react';
import { getStorageKey } from 'src/hooks';
import { User } from 'src/store/dto';
import { users } from 'src/store/mocUsers';
import { IonAvatarStyled, MenuListItem } from '..';
import { ListFooter } from './styles';

interface FooterListProps {
  location: History.Location;
}

function FooterList({ location }: FooterListProps) {
  const [userLogged, setUserLogged] =  useState<string>("Nome do usuário")

  useIonViewDidEnter(async() => {
    let user: User = await getStorageKey("LoggedInUserInStorage")
    setUserLogged(user.name);
  })
  
  return (
    <ListFooter>
      <MenuListItem
        button
        lines="none"
        detail
        detailIcon={chevronForwardOutline}
        title={`${users[0].name} ${users[0].subName}`}
        location={location}
        noUppercase
      >
        <IonAvatarStyled>
          <img src={users[0].imgUserUrl} alt={users[0].email} />
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

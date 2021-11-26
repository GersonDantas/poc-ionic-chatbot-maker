import React from 'react';
import * as History from 'history';
import { chevronForwardOutline } from 'ionicons/icons';
import { IonAvatarStyled, MenuListItem } from '..';
import { ModalUseDetailComponent } from "./ModalUseDetailComponent"
import { useGlobalContextData } from 'src/store';
import { ListFooter } from './styles';
import { returnTheFirstName, returnTheSurname } from 'src/utils';

interface FooterListProps {
  location: History.Location;
}

function FooterList({ location }: FooterListProps) {
  const { userSession } = useGlobalContextData();
  const [isModalUserDetail, setIsModalUserDetail] = React.useState<boolean>(false);

  return (
    <>
      {
        isModalUserDetail &&
        (
          <ModalUseDetailComponent
            isModal={isModalUserDetail}
            setIsModal={setIsModalUserDetail}
          />
        )
      }

      <ListFooter>

        <MenuListItem
          button
          lines="none"
          detail
          detailIcon={chevronForwardOutline}
          title={`${returnTheFirstName(userSession?.name)} ${returnTheSurname(userSession?.name)}`}
          location={location}
          noUppercase
          onClick={() => setIsModalUserDetail(true)}
        >

          <IonAvatarStyled>
            <img src={
              userSession?.platformUser.imageUrl ?? "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
            } alt={
              userSession?.platformUser?.email ?? "Foto do usuário conectado"
            } />
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
    </>
  );
};

export { FooterList };

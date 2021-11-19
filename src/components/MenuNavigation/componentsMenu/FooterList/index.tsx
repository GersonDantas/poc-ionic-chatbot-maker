import React from 'react';
import * as History from 'history';
import { chevronForwardOutline } from 'ionicons/icons';
import { IonAvatarStyled, MenuListItem } from '..';
import { ModalUseDetailComponent } from "./ModalUseDetailComponent"
import { useGlobalContextData } from 'src/store';
import { ListFooter} from './styles';

interface FooterListProps {
  location: History.Location;
}

function FooterList({ location }: FooterListProps) {
  const { userConnected } = useGlobalContextData();
  const [isModalUserDetail, setIsModalUserDetail] = React.useState<boolean>(false);

  return (
    <>
      {isModalUserDetail &&
        (
          <ModalUseDetailComponent
            isModal={isModalUserDetail}
            setIsModal={setIsModalUserDetail}
          />
        )}
      <ListFooter>
        <MenuListItem
          button
          lines="none"
          detail
          detailIcon={chevronForwardOutline}
          title={`${userConnected?.name} ${userConnected?.subName}`}
          location={location}
          noUppercase
          onClick={() => setIsModalUserDetail(true)}
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
    </>
  );
};

export { FooterList };

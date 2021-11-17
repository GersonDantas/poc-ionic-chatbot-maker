import { IonCol } from '@ionic/react';
import * as History from 'history';
import { chevronForwardOutline } from 'ionicons/icons';
import { useState } from 'react';
import { CommonButton, InputAndLabelComponent } from 'src/components';
import { useGlobalContextData } from 'src/store';
import { IonAvatarStyled, MenuListItem } from '..';
import {
  CardModalUserDetail,
  CardModalUserDetailContent,
  CardModalUserDetailHeader,
  ListFooter,
  ModalUserDetail,
  RowFooter,
  UserDetailAvatar,
  UserDetailTitle
} from './styles';

interface FooterListProps {
  location: History.Location;
}

function FooterList({ location }: FooterListProps) {
  const { userConnected } = useGlobalContextData();

  const [isModalUserDetail, setIsModalUserDetail] = useState<boolean>(false);


  return (
    <>
      {isModalUserDetail &&
        (<ModalUserDetail
          isOpen={isModalUserDetail}
          onDidDismiss={() => setIsModalUserDetail(false)}
        >
          <CardModalUserDetail>
            <CardModalUserDetailHeader>
              <UserDetailAvatar>

              </UserDetailAvatar>
              <UserDetailTitle>

              </UserDetailTitle>
            </CardModalUserDetailHeader>
            <CardModalUserDetailContent>
              <InputAndLabelComponent />

              <InputAndLabelComponent />

              <InputAndLabelComponent />
              <RowFooter>
                <IonCol>
                  <CommonButton >
                    SAIR
                  </CommonButton>
                </IonCol>
                <IonCol>
                  <CommonButton >
                    CANCELAR
                  </CommonButton>
                </IonCol>
                <IonCol>
                  <CommonButton >
                    SALVAR
                  </CommonButton>
                </IonCol>
              </RowFooter>
            </CardModalUserDetailContent>
          </CardModalUserDetail>
        </ModalUserDetail>)}
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
    </>
  );
};

export { FooterList };

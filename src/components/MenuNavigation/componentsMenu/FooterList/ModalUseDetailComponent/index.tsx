import React, { Dispatch, SetStateAction } from 'react';
import { IonCol, IonRippleEffect } from '@ionic/react';
import { useGlobalContextData } from 'src/store';
import { valueInput } from 'src/utils';
import { User } from 'src/store/dto';
import {
  CardModal,
  CardModalUserDetailContent,
  CardModalUserDetailHeader,
  ColModal,
  CommonButtonDetail,
  IonTextTerms,
  ModalUserDetail,
  RowFooter,
  RowInputs,
  RowModal,
  UserDetailAvatar,
  UserDetailTitle
} from '../styles';
import { removeStorageByKey } from 'src/hooks/useLocalStorageCapacitor';
import { InputAndLabelComponent } from 'src/components';
import { replaceHistory } from 'src/hooks';


interface ModalUseDetailProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>
}

const ModalUseDetailComponent: React.FC<ModalUseDetailProps> = (props) => {
  const { userConnected } = useGlobalContextData();

  const [stateUser, setStateUser] = React.useState<User>({
    name: `${userConnected?.name} ${userConnected?.subName}`,
    email: '',
    phoneNumber: '',
    password: '',
  });

  const logout = (): void => {
    removeStorageByKey("LoggedInUserInStorage");
    replaceHistory("/");
  }

  const onClose = (event: any) => {
    event.preventDefault();
    if (event.target.id === "rowModalUserDetail"
      || event.target.id === "colModalUserDetail") props.setIsModal(false);
  }

  React.useEffect(() => {
    document.body.addEventListener("click", onClose, false);
  });

  React.useEffect(() => {
    return () => document.body.removeEventListener("click", onClose, false);
  }, []);

  React.useEffect(() => {
    setStateUser(userConnected!);
  }, [userConnected]);

  return (
    <ModalUserDetail
      isOpen={props.isModal}
      onDidDismiss={() => props.setIsModal(false)}
    >
      <RowModal id="rowModalUserDetail">
        <ColModal
          id="colModalUserDetail"
          sizeXs="12"
          sizeXl="6"
          sizeLg="6"
          sizeMd="8"
          sizeSm="12"
        >
          <CardModal>

            <CardModalUserDetailHeader color="primary">
              <UserDetailAvatar>
                <img src={userConnected?.imgUserUrl} alt={userConnected?.email} />
              </UserDetailAvatar>

              <UserDetailTitle>
                {`${stateUser.name} ${stateUser.subName}`}
              </UserDetailTitle>
            </CardModalUserDetailHeader>

            <CardModalUserDetailContent>
              {handlerRowInputs()}

              {HandlerRowButtons()}
            </CardModalUserDetailContent>

          </CardModal>
        </ColModal>
      </RowModal>
    </ModalUserDetail>
  );

  function handlerRowInputs() {
    return (
      <RowInputs>
        <IonCol>
          <InputAndLabelComponent
            className="input-user-detail"
            label="Nome"
            value={stateUser.name}
            type="text"
            autocomplete="name"
            onIonChange={(e) => valueInput({
              name: "name",
              event: e,
              state: stateUser,
              setState: setStateUser,
            })} />

          <InputAndLabelComponent
            className="input-user-detail"
            label="Email"
            value={stateUser.email}
            type="text"
            autocomplete="email"
            onIonChange={(e) => valueInput({
              name: "email",
              event: e,
              state: stateUser,
              setState: setStateUser,
            })} />

          <InputAndLabelComponent
            className="input-user-detail"
            label="WhatsApp"
            value={stateUser.phoneNumber}
            type="text"
            autocomplete="tel"
            onIonChange={(e) => valueInput({
              name: "phoneNumber",
              event: e,
              state: stateUser,
              setState: setStateUser,
            })} />

          <IonTextTerms
            href="https://drive.google.com/file/d/1F9oyvCEV0MjXNZD2X7DSXqqVElEICPEV/view"
            target="_blank"
          >
            Termos, Política de Dados e Política de Cookies.
          </IonTextTerms>
        </IonCol>
      </RowInputs>
    );
  }

  function HandlerRowButtons() {
    return (
      <RowFooter>
        <IonCol id="getOut">
          <CommonButtonDetail
            size="small"
            color="danger"
            onClick={logout}
            expand="block"
          >
            SAIR
            <IonRippleEffect />
          </CommonButtonDetail>
        </IonCol>

        <IonCol id="space" />

        <IonCol>
          <CommonButtonDetail
            size="small"
            onClick={() => props.setIsModal(false)}
            fill="outline"
            className="button-cancel-detail"
            expand="block"
          >
            CANCELAR
            <IonRippleEffect />
          </CommonButtonDetail>
        </IonCol>

        <IonCol id="save">
          <CommonButtonDetail
            size="small"
            expand="block"
          >
            SALVAR
            <IonRippleEffect />
          </CommonButtonDetail>
        </IonCol>
      </RowFooter>
    );
  }
};

export { ModalUseDetailComponent };

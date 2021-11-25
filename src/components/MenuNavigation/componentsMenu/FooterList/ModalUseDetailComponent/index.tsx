import React, { Dispatch, SetStateAction } from 'react';
import { IonCol, IonRippleEffect } from '@ionic/react';
import { useGlobalContextData } from 'src/store';
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
import { replaceHistory, useForm } from 'src/hooks';
import { initialStateUser, validateForm } from 'src/utils';


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

  const form = useForm({
    initialValues: initialStateUser,
    validate: validateForm
  })

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
            label="Nome"
            touched={form.touched.name}
            spanError={form.errors.name}

            value={form.values.name}
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Digite sua nome..."
            onIonBlur={form.handleBlur}
            onIonChange={form.handleChange}
          />

          <InputAndLabelComponent
            label="Email"
            touched={form.touched.email}
            spanError={form.errors.email}

            className="input-user-detail"
            value={form.values.email}
            type="text"
            name="email"
            placeholder="Digite sua email..."
            autocomplete="email"
            onIonBlur={form.handleBlur}
            onIonChange={form.handleChange}
          />

          <InputAndLabelComponent
            label="WhatsApp"
            touched={form.touched.whatsApp}
            spanError={form.errors.whatsApp}
            
            className="input-user-detail"
            value={form.values.whatsApp}
            name="whatsApp"
            placeholder="(__) ____-____"
            autocomplete="tel"
            onIonBlur={form.handleBlur}
            onIonChange={form.handleChange}

          />

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

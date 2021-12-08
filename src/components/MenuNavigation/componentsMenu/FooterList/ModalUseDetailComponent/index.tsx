import { IonCol, IonRippleEffect, useIonViewWillEnter } from '@ionic/react';
import React, { Dispatch, SetStateAction } from 'react';
import { InputAndLabelComponent } from 'src/components';
import { replaceHistory, useForm } from 'src/hooks';
import { clearStorage } from 'src/hooks';
import { useGlobalContextData } from 'src/store';
import { PlatformUser } from 'src/types';
import {
  initialPlatformUser, initialStateUser, maskToPhoneNumber, validateForm,
} from 'src/utils';

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
  UserDetailTitle,
} from '../styles';

interface ModalUseDetailProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>
}

const ModalUseDetailComponent: React.FC<ModalUseDetailProps> = function (props) {
  const { isModal, setIsModal } = props;

  const form = useForm({
    initialValues: initialStateUser,
    validate: validateForm,
  });

  const { userSession } = useGlobalContextData();
  const [stateUser, setStateUser] = React.useState<PlatformUser>({
    ...initialPlatformUser,
  });

  const logout = (): void => {
    // removeStorageByKey('SessionUserInLocalStorage');
    // removeStorageByKey('ChatbotSelectedInLocalStorage');
    clearStorage();
    replaceHistory('/');
  };


  const onClose = (event: any) => {
    event.preventDefault();
    if (event.target.id === 'rowModalUserDetail'
      || event.target.id === 'colModalUserDetail') setIsModal(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', onClose, false);
    if (userSession?.platformUser) {
      form.setValues({
        ...form.values,
        name: userSession?.platformUser.name,
        email: userSession?.platformUser.email,
        whatsApp: userSession?.platformUser.whatsApp,
      })
      setStateUser(userSession?.platformUser!)
    }
    return () => document.body.removeEventListener('click', onClose, false);
  }, [userSession]);

  return (
    <ModalUserDetail
      isOpen={isModal}
      onDidDismiss={() => setIsModal(false)}
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
                <img src={stateUser.imageUrl} alt={stateUser.email} />
              </UserDetailAvatar>

              <UserDetailTitle>
                {`${stateUser.name}`}
              </UserDetailTitle>
            </CardModalUserDetailHeader>

            <CardModalUserDetailContent>
              <RowInputs>
                <IonCol>
                  <InputAndLabelComponent
                    label="Nome"
                    touched={form.touched.name}
                    spanError={form.errors.name}
                    value={form.values.name}
                    type="text"
                    name="name"
                    className="input-user-detail"
                    autocomplete="name"
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
                    autocomplete="email"
                    onIonBlur={form.handleBlur}
                    onIonChange={form.handleChange}
                  />

                  <InputAndLabelComponent
                    label="WhatsApp"
                    touched={form.touched.whatsApp}
                    spanError={form.errors.whatsApp}
                    className="input-user-detail"
                    value={maskToPhoneNumber(form.values.whatsApp)}
                    name="whatsApp"
                    maxlength={15}
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
                    onClick={() => setIsModal(false)}
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
            </CardModalUserDetailContent>

          </CardModal>
        </ColModal>
      </RowModal>
    </ModalUserDetail>
  );
};

export { ModalUseDetailComponent };

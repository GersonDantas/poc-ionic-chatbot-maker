import React from "react";
import { users } from "src/store/mocUsers"
import { IonItem, IonSearchbar } from '@ionic/react';
import {
  DivListSuspended,
  DivMenuSuspended,
  IonAvatarStyled,
  ListSuspendedItem,
  SuspendedAvatar,
  SuspendedLabel,
  UserListSuspend
} from "./styles";
import { caretDownOutline, caretUpOutline } from "ionicons/icons";
import { useGlobalContextData } from "src/store";

const UsersDropDownList: React.FC = () => {
  const [isSuspended, setIsSuspended] = React.useState<boolean>(false)

  const { userConnected } = useGlobalContextData()

  return (
    <DivMenuSuspended>
      <IonItem
        button
        lines="none"
        detail
        detailIcon={
          isSuspended
            ? caretUpOutline
            : caretDownOutline
        }
        onClick={() => setIsSuspended(!isSuspended)}
      >
        <IonAvatarStyled>
          <img src={userConnected?.imgMessageUrl} alt={userConnected?.email} />
        </IonAvatarStyled>
        <span className="label-item noUppercase">{userConnected?.name}</span>
      </IonItem>
      {isSuspended && (
        <DivListSuspended>
          <IonSearchbar></IonSearchbar>
          <UserListSuspend>
            {users.map((userItems, index) => {
              return (
                <ListSuspendedItem key={index} lines="none">
                  <SuspendedAvatar>
                    <img src={userItems.imgMessageUrl} alt={userItems.email} />
                  </SuspendedAvatar>
                  <SuspendedLabel>
                    {`${userItems.name} ${userItems.subName}`}
                  </SuspendedLabel>
                </ListSuspendedItem>
              )
            })}
          </UserListSuspend>
        </DivListSuspended>
      )
      }
    </DivMenuSuspended>
  );
};

export { UsersDropDownList, IonAvatarStyled };

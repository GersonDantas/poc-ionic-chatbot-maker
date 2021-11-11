import React from "react";
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import {users} from "src/pages/LoginPage/mocUsers"
import { IonAvatarStyled } from "./styles";
import { caretDownOutline, caretUpOutline } from "ionicons/icons";

const UsersDropDownList: React.FC = () => {
  const [state, setState] = React.useState<boolean>(false)

  return (
    <IonItem
      button
      lines="none"
      detail
      detailIcon={
        state
          ? caretUpOutline
          : caretDownOutline
      }
      onClick={() => setState(!state)}
    >
      <IonAvatarStyled>
        <img src={users[0].imgMessageUrl} alt={users[0].email} />
      </IonAvatarStyled>
      <span className="label-item noUppercase">{users[0].name}</span>
    </IonItem>
  );
};

export {UsersDropDownList, IonAvatarStyled};

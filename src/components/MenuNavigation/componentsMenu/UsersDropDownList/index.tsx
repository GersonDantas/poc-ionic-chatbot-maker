import React from "react";
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import {users} from "src/pages/LoginPage/mocUsers"
import { IonAvatarStyled } from "./styles";
import { caretDownOutline, caretUpOutline } from "ionicons/icons";


interface UsersDropDownListProps {
}

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
      <IonLabel >{users[0].name}</IonLabel>
    </IonItem>
  );
};

export {UsersDropDownList};

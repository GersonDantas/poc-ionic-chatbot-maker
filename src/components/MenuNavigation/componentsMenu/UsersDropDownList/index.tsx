import React from "react";
import { users } from "src/store/mocUsers";
import { IonItem } from '@ionic/react';
import {
  DivMenuSuspended,
  IonAvatarStyled,
} from "./styles";
import {SuspendedMenu} from "./SuspendedMenu"
import { caretDownOutline, caretUpOutline } from "ionicons/icons";
import { useGlobalContextData } from "src/store";
import { User } from "src/store/dto";

const UsersDropDownList: React.FC = () => {
  const { userConnected } = useGlobalContextData();

  const [isSuspended, setIsSuspended] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<User[]>([]);

  const onClose = (e: any) => {
    e.preventDefault();
    if (!e.target.classList.contains("suspended-menu-user-click")) {
      setIsSuspended(false);
      setSearchTerm("");
    }
  }

  React.useEffect(() => {
    const results = users.filter(person =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <DivMenuSuspended >
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
        className="suspended-menu-user-click"
      >
        <IonAvatarStyled>
          <img src={userConnected?.imgMessageUrl} alt={userConnected?.email} />
        </IonAvatarStyled>
        <span className="label-item noUppercase">{userConnected?.name}</span>
      </IonItem>
      {isSuspended && (
        <SuspendedMenu 
          setSearchTerm={setSearchTerm}
          onClose={onClose}
          searchResults={searchResults}
        />
      )}
    </DivMenuSuspended>
  );
};

export { UsersDropDownList, IonAvatarStyled };


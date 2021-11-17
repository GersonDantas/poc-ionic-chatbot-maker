import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { users } from "src/store/mocUsers"
import { IonItem, useIonViewWillLeave } from '@ionic/react';
import {
  DivListSuspended,
  DivMenuSuspended,
  InputListSuspended,
  IonAvatarStyled,
  ListSuspendedItem,
  SuspendedAvatar,
  SuspendedLabel,
  UserListSuspend
} from "./styles";
import { caretDownOutline, caretUpOutline } from "ionicons/icons";
import { useGlobalContextData } from "src/store";
import { User } from "src/store/dto";
import { setStorageByKey } from "src/hooks";

const UsersDropDownList: React.FC = () => {
  const { userConnected } = useGlobalContextData();

  const [isSuspended, setIsSuspended] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<User[]>([]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const onClose = (e: any) => {
    e.preventDefault();
    if (!e.target.classList.contains("suspended-menu-user-click")) {
      setIsSuspended(false);
      setSearchTerm("");
    }
  }
  document.body.addEventListener("click", onClose, false);

  React.useEffect(() => {
    const results = users.filter(person =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  useIonViewWillLeave(() => {
    document.body.removeEventListener("click", onClose, false);
  });

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
      {isSuspended && SuspendedMenu()}
    </DivMenuSuspended>
  );

  function SuspendedMenu(): React.ReactNode {
    return <DivListSuspended className="suspended-menu-user-click">
      <InputListSuspended 
        autoFocus type="text" 
        className="suspended-menu-user-click"
        placeholder="Pesquisar usuário..."
        onChange={handleChange}
      />
      <UserListSuspend className="suspended-menu-user-click">
        {searchResults.map((userItems, index) => {
          return (
            <ListSuspendedItem 
              className="suspended-menu-user-click"  
              key={`${index}${uuidv4()}`} 
              lines="none"
              onClick={() => changeUser(userItems)}
            >
              <SuspendedAvatar className="suspended-menu-user-click">
                <img src={userItems.imgMessageUrl} alt={userItems.email} />
              </SuspendedAvatar>
              <SuspendedLabel className="suspended-menu-user-click">
                {`${userItems.name} ${userItems.subName}`}
              </SuspendedLabel>
            </ListSuspendedItem>
          );
        })}
      </UserListSuspend>
    </DivListSuspended>;
  }

  async function changeUser(user: User): Promise<void> {
    setStorageByKey("LoggedInUserInStorage", user);
    window.location.replace("/page/painel");
  }

};

export { UsersDropDownList, IonAvatarStyled };

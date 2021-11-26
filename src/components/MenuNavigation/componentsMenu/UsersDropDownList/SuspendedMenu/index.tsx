import { useIonViewWillEnter } from '@ionic/react';
import React, { Dispatch, SetStateAction } from 'react';
import { setStorageByKey } from 'src/hooks';
import { User } from 'src/store/dto';
import { v4 as uuidv4 } from 'uuid';

import {
  DivListSuspended,
  InputListSuspended,
  ListSuspendedItem,
  SuspendedAvatar,
  SuspendedLabel,
  UserListSuspend
} from "../styles";

interface SuspendedMenuProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchResults: User[];
  onClose: (e: any) => void
}

const SuspendedMenu: React.FC<SuspendedMenuProps> = (props) => {
  const handleChange = (event: any) => {
    props.setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", props.onClose, false);
  });

  React.useEffect(() => {
    return () => document.body.removeEventListener("click", props.onClose, false);
  }, []);
  
  return (
    <DivListSuspended className="suspended-menu-user-click">
      <InputListSuspended
        autoFocus type="text"
        className="suspended-menu-user-click"
        placeholder="Pesquisar usuário..."
        onChange={handleChange}
      />
      <UserListSuspend className="suspended-menu-user-click">
        {props.searchResults.map((userItems, index) => {
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
    </DivListSuspended>
  );

  async function changeUser(user: User): Promise<void> {
    setStorageByKey("LoggedInUserInStorage", user);
    window.location.replace("/page/painel");
  }
}

export {SuspendedMenu};
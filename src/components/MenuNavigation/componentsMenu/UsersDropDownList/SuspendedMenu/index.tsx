import React, { Dispatch, SetStateAction } from 'react';
import { pushHistory, setStorageByKey } from 'src/hooks';
import { useGlobalContextData } from 'src/store';
import { ChatbotItem } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

import {
  DivListSuspended,
  InputListSuspended,
  ListSuspendedItem,
  SuspendedAvatar,
  SuspendedLabel,
  UserListSuspend,
} from '../styles';

interface SuspendedMenuProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchResults: ChatbotItem[] | undefined;
  onClose: (event: any) => void
}

const SuspendedMenu: React.FC<SuspendedMenuProps> = function (props) {
  const { onClose, searchResults, setSearchTerm } = props;
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', onClose, false);
  });

  React.useEffect(() => () => document.body.removeEventListener('click', onClose, false), []);

  return (
    <DivListSuspended className="suspended-menu-user-click">
      <InputListSuspended
        autoFocus
        type="text"
        className="suspended-menu-user-click"
        placeholder="Pesquisar usuário..."
        onChange={handleChange}
      />
      <UserListSuspend className="suspended-menu-user-click">
        {searchResults?.map((userItems) => (
          <ListSuspendedItem
            className="suspended-menu-user-click"
            key={`${uuidv4()}`}
            lines="none"
            onClick={() => changeChatbot(userItems)}
          >
            <SuspendedAvatar className="suspended-menu-user-click">
              <img src={userItems.imageUrl} alt={userItems.name} />
            </SuspendedAvatar>
            <SuspendedLabel className="suspended-menu-user-click">
              {`${userItems.name}`}
            </SuspendedLabel>
          </ListSuspendedItem>
        ))}
      </UserListSuspend>
    </DivListSuspended>
  );

  function changeChatbot(chatbot: ChatbotItem): void {
    pushHistory('/page/painel')
    setStorageByKey<ChatbotItem>("ChatbotSelectedInLocalStorage", chatbot)
  }
};

export { SuspendedMenu };

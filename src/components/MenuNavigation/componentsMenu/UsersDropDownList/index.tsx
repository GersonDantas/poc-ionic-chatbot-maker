import { IonItem } from '@ionic/react';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import React from 'react';
import { useGlobalContextData } from 'src/store';
import { ChatbotItem } from 'src/types';

import {
  DivMenuSuspended,
  IonAvatarStyled,
} from './styles';
import { SuspendedMenu } from './SuspendedMenu';

const UsersDropDownList: React.FC = function () {
  const { userSession, chatbotConnected } = useGlobalContextData();


  const [isSuspended, setIsSuspended] = React.useState<boolean>(false);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<ChatbotItem[] | undefined>([]);

  const onClose = (event: any) => {
    event.preventDefault();
    if (!event.target.classList.contains('suspended-menu-user-click')) {
      setIsSuspended(false);
      setSearchTerm('');
    }
  };

  React.useEffect(() => {
    const chatbotsUsers = userSession?.platformUser?.chatbots;
    const results = chatbotsUsers?.filter(
      (person): boolean => person.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchTerm, userSession]);

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
        className="suspended-menu-user-click"
      >
        <IonAvatarStyled>
          <img
            src={
              chatbotConnected?.imageUrl ?? 'https://cbmstgstaging.blob.core.windows.net/content/default/chatbot-default.jpg'
            }
            alt={`${chatbotConnected?.name} ${chatbotConnected?.id}`}
          />
        </IonAvatarStyled>

        <span className="label-item noUppercase">
          {
            chatbotConnected?.name
            ?? userSession?.platformUser.chatbots[0].name
          }
        </span>
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

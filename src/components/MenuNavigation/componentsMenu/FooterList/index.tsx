import * as History from 'history';
import { chevronForwardOutline } from 'ionicons/icons';
import { users } from 'src/pages/LoginPage/mocUsers';
import { IonAvatarStyled, MenuListItem } from '..';
import { ListFooter } from './styles';

interface FooterListProps {
  location: History.Location;
}

function FooterList({ location }: FooterListProps) {
  return (
    <ListFooter>
      <MenuListItem
        button
        lines="none"
        detail
        detailIcon={chevronForwardOutline}
        title={`${users[0].name} ${users[0].subName}`}
        location={location}
        noUppercase
      >
        <IonAvatarStyled>
          <img src={users[0].imgUserUrl} alt={users[0].email} />
        </IonAvatarStyled>
      </MenuListItem>
      <MenuListItem
        href="https://chatbotmaker.gitbook.io/centraldeajuda/"
        target="_blank"
        lines="none"
        title="CENTRAL DE AJUDA"
        location={location}
      >
        <i className="cb-question-mark" />
      </MenuListItem>
    </ListFooter>
  );
};

export { FooterList };

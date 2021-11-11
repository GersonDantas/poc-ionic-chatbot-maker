import { IonItem, IonLabel } from '@ionic/react';
import * as History from 'history';

interface MenuListItemProps {
  key?: number;
  url?: string;
  iconMoon: string;
  title: string;
  location: History.Location;
}

function MenuListItem(props: MenuListItemProps) {
  return (
    <IonItem
      key={props.key}
      className={
        props.location.pathname === props.url ? "selected" : ""
      }
      routerLink={props.url}
      routerDirection="none"
      lines="none"
      detail={false}
    >
      <i className={`cb-${props.iconMoon}`} />
      <IonLabel>{props.title}</IonLabel>
    </IonItem>
  );
}

export {MenuListItem};

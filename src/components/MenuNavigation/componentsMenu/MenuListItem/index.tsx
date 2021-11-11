import { ReactNode } from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import {IonItemProps} from "src/types"
import * as History from 'history';

type MenuListItemProps = {
  key?: number;
  url?: string;
  children: ReactNode;
  title: string;
  location?: History.Location;
  noUppercase?: boolean;
} & IonItemProps

function MenuListItem(props: MenuListItemProps) {
  return (
    <IonItem
      key={props.key}
      className={
        props.location?.pathname === props.url ? "selected" : ""
      }
      routerLink={props.url}
      routerDirection="none"
      lines="none"
      detail={false}
      {...props}
    >
      {props.children}
      <span  
        className={`${props.noUppercase ? "noUppercase" : ""} label-item`}
      >
          {props.title}
      </span>
    </IonItem>
  );
}

export {MenuListItem};

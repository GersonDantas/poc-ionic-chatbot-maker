import { ReactNode } from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { IonItemProps } from "src/types"
import * as History from 'history';

type MenuListItemProps = {
  key?: string | undefined;
  url?: string;
  children: ReactNode;
  title: string;
  location?: History.Location;
  noUppercase?: boolean;
} & IonItemProps

function MenuListItem(props: MenuListItemProps) {
  const { children, location, url, noUppercase, title } = props;

  return (
    <IonItem
      className={
        location?.pathname === url ? "selected" : ""
      }
      routerLink={url}
      routerDirection="none"
      lines="none"
      detail={false}
      {...props}
    >
      {children}
      <span
        className={`${noUppercase ? "noUppercase" : ""} label-item`}
      >
        {title}
      </span>
    </IonItem>
  );
}

export { MenuListItem };

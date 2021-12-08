import React from "react";
import { IonItem } from '@ionic/react';
import * as History from 'history';
import { ReactNode } from 'react';
import { IonItemProps } from 'src/types';

type MenuListItemProps = {
  key?: string | undefined;
  url?: string;
  children: ReactNode;
  title: string;
  location?: History.Location;
  noUppercase?: boolean;
} & IonItemProps

const MenuListItem = function (props: MenuListItemProps) {
  const {
    children, location, url, noUppercase, title,
  } = props;

  return (
    <IonItem
      className={
        location?.pathname === url ? 'selected' : ''
      }
      routerLink={url}
      routerDirection="none"
      lines="none"
      detail={false}
      {...props}
    >
      {children}
      <span
        className={`${noUppercase ? 'noUppercase' : ''} label-item`}
      >
        {title}
      </span>
    </IonItem>
  );
};

export { MenuListItem };

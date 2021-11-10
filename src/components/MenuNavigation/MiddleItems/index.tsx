import { IonItem, IonLabel } from '@ionic/react';
import { mediumMenuList } from '../navigationRoutesObjects';
import * as History from 'history';

interface MiddleItemsProps {
  location: History.Location;
}

function MiddleItems({ location }: MiddleItemsProps) {
  return (
    <>
      {mediumMenuList.map((appPage, index) => {
        return (
          <IonItem
            key={index}
            className={
              location.pathname === appPage.url ? "selected" : ""
            }
            routerLink={appPage.url}
            routerDirection="none"
            lines="none"
            detail={false}
          >
            <i className={`cb-${appPage.iconMoon}`} />
            <IonLabel>{appPage.title}</IonLabel>
          </IonItem>
        );
      })}
    </>
  );
}

export default MiddleItems;

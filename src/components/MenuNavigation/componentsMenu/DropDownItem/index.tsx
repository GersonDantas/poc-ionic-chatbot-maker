import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IonItem, IonLabel } from '@ionic/react';
import { chevronBackOutline, chevronDownOutline } from 'ionicons/icons';
import { DropDownItemProps } from 'src/types';

function DropDownItem(props: DropDownItemProps) {
  const [state, setState] = React.useState<boolean>(false)

  return (
    <>
      <IonItem
        lines="none"
        button
        detail
        detailIcon={
          state
            ? chevronDownOutline
            : chevronBackOutline
        }
        onClick={() => setState(!state)}
      >
        {props.faIcon && <FontAwesomeIcon icon={props.faIcon} className="cb-" />}
        {props.iconMoon && <i className={`cb-${props.iconMoon}`} />}
        <IonLabel>{props.title}</IonLabel>
      </IonItem>

      {
        state && props.dropDownObject.map((appPage, index) => {
          return (
            <IonItem
              key={index}
              className={
                `${props.location.pathname === appPage.url ? "selected" : ""} sub-menu`
              }
              routerLink={appPage.url}
              routerDirection="none"
              lines="none"
            >
              {appPage.faIcon && <FontAwesomeIcon icon={appPage.faIcon!} className="cb-" />}
              {appPage.iconMoon && <i className={`cb-${appPage.iconMoon}`} />}
              <IonLabel>{appPage.title}</IonLabel>
            </IonItem>
          );
        })
      }
    </>
  );
};

export {DropDownItem};

import React from 'react';
import {v4 as uuidv4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IonItem, IonLabel, IonRippleEffect } from '@ionic/react';
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
        <span className="label-item" >{props.title}</span>
        <IonRippleEffect />
      </IonItem>

      {
        state && props.dropDownObject.map((appPage, index) => {
          return (
            <IonItem
              key={`${index} ${uuidv4()}`}
              className={
                `${props.location.pathname === appPage.url ? "selected" : ""} sub-menu`
              }
              routerLink={appPage.url}
              routerDirection="none"
              lines="none"
            >
              {appPage.faIcon && <FontAwesomeIcon icon={appPage.faIcon!} className="cb-" />}
              {appPage.iconMoon && <i className={`cb-${appPage.iconMoon}`} />}
              <span className="label-item">{appPage.title}</span>
            </IonItem>
          );
        })
      }
    </>
  );
};

export {DropDownItem};

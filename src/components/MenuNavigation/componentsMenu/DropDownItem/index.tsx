import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IonItem, IonRippleEffect } from '@ionic/react';
import { chevronBackOutline, chevronDownOutline } from 'ionicons/icons';
import React from 'react';
import { DropDownItemProps } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

const DropDownItem = function (props: DropDownItemProps) {
  const {
    faIcon, iconMoon, dropDownObject, location, title,
  } = props;

  const [state, setState] = React.useState<boolean>(false);

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
        {faIcon && <FontAwesomeIcon icon={faIcon} className="cb-" />}
        {iconMoon && <i className={`cb-${iconMoon}`} />}
        <span className="label-item">{title}</span>
        <IonRippleEffect />
      </IonItem>

      {
        state && dropDownObject.map((appPage) => (
          <IonItem
            key={`${uuidv4()}`}
            className={
                `${location.pathname === appPage.url ? 'selected' : ''} sub-menu`
              }
            routerLink={appPage.url}
            routerDirection="none"
            lines="none"
          >
            {appPage.faIcon && <FontAwesomeIcon icon={appPage.faIcon!} className="cb-" />}
            {appPage.iconMoon && <i className={`cb-${appPage.iconMoon}`} />}
            <span className="label-item">{appPage.title}</span>
          </IonItem>
        ))
      }
    </>
  );
};

export { DropDownItem };

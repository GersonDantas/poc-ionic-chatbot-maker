import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IonRippleEffect } from '@ionic/react';
import { CommonButton } from 'src/components';

import './styles.css';

const CommonIconButtonStyled = function () {
  return (
    <CommonButton color="tertiary" className="common-icon-button-styled">
      <FontAwesomeIcon icon={faDownload} pull="left" style={{ fontSize: 'small' }} />
      <IonRippleEffect />
    </CommonButton>
  );
};

export default CommonIconButtonStyled;

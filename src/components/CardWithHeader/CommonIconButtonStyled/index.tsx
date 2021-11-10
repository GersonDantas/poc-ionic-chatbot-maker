import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IonRippleEffect } from '@ionic/react';
import { CommonButton } from 'src/components';
import styled from 'styled-components';


function CommonIconButtonStyled() {

  const CommonIconButtonStyled = styled(CommonButton)`
    margin: -5px 0 -5px 0;
    @media screen and (max-width: 334px) {
      margin: 5px;
    }
    height: fit-content;
    --padding-top: 10px;
    --padding-bottom: 10px;
    --padding-start: 10px;
    --padding-end: 10px;
  `;

  const FaIconCard = styled(FontAwesomeIcon)`
    font-size: small;
  `;

  return (
    <CommonIconButtonStyled color="tertiary">
      <FaIconCard icon={faDownload} pull="left" />
      <IonRippleEffect />
    </CommonIconButtonStyled>
  );
};

export default CommonIconButtonStyled;

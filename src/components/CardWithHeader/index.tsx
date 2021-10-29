import { IonCardContent, IonCardHeader, IonRow } from "@ionic/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { IonCardHeaderContentRow, IonCardHeaderTitle } from "./styles";

import { IonCardWithHeader } from "../MyIonComonsStyleds";

import { CardWithHeaderProps } from "src/types";

function CardWithHeader(props: CardWithHeaderProps) {

  const RowCardHeader = styled(IonRow)`
    width: 100%;
    justify-content: ${props.titleInCenter ? "center" : "space-between"};
    align-items: center;
  `;

  return (
    <IonCardWithHeader>

      <IonCardHeader color="primary">
        <RowCardHeader>

          <IonCardHeaderTitle>{props.cardTitle}</IonCardHeaderTitle>

          {props.cardIcon && <FontAwesomeIcon icon={faDownload} pull="left" />}
          
        </RowCardHeader>
      </IonCardHeader>

      <IonCardContent>
        <IonCardHeaderContentRow>{props.children}</IonCardHeaderContentRow>
      </IonCardContent>
      
    </IonCardWithHeader>
  );
}

export { CardWithHeader };

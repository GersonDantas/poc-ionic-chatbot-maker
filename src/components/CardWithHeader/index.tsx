import styled from "styled-components";

import { IonCardContent, IonCardHeader, IonRippleEffect, IonRow } from "@ionic/react";

import { IonCardHeaderContentRow, IonCardHeaderTitle } from "./styles";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { IonCardWithHeader } from "../MyIonComonsStyleds";

import CommonIconButton from "./CommonIconButton";
import { CardWithHeaderProps } from "src/types";

function CardWithHeader(props: CardWithHeaderProps) {

  const RowCardHeader = styled(IonRow)`
    width: 100%;
    justify-content: ${props.titleInCenter ? "center" : "space-between"};
    align-items: center;
  `;

  return (
    <IonCardWithHeader className="border-radius-5">
      <IonCardHeader color="primary">
        <RowCardHeader>

          <IonCardHeaderTitle>{props.cardTitle}</IonCardHeaderTitle>

          {props.hasIcon && <CommonIconButton />}
          
        </RowCardHeader>
      </IonCardHeader>

      <IonCardContent>
        <IonCardHeaderContentRow>{props.children}</IonCardHeaderContentRow>
      </IonCardContent>
      
    </IonCardWithHeader>
  );
}

export { CardWithHeader };

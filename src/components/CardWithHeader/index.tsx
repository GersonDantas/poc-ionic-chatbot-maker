import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import { IonCardContent, IonCardHeader, IonRow } from "@ionic/react";
import { ReactNode } from "react";
import styled from "styled-components";
import { IonCardWithHeader } from "../MyIonComonsStyleds";

import {
  IonCardHeaderContentRow,
  IonCardHeaderTitle,
} from "./styles";

interface CardWithHeaderProps {
  children: ReactNode;
  titleInCenter?: boolean | undefined;
  cardTitle: string;
  cardIcon?: boolean | undefined;
}

function CardWithHeader(props: CardWithHeaderProps) {
  console.log(props.cardIcon)
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
          { props.cardIcon && <FontAwesomeIcon icon={faDownload} pull="left" />}
        </RowCardHeader>
      </IonCardHeader>
      <IonCardContent>
        <IonCardHeaderContentRow>{props.children}</IonCardHeaderContentRow>
      </IonCardContent>
    </IonCardWithHeader>
  );
}

export {CardWithHeader};

import styled from "styled-components";

import { IonCardContent, IonCardHeader} from "@ionic/react";

import { IonCardHeaderContentRow, IonCardHeaderTitle, RowCardHeader } from "./styles";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { IonCardWithHeader } from "../MyIonComonsStyleds";

import CommonIconButton from "./CommonIconButton";
import { CardWithHeaderProps } from "src/types";



function CardWithHeader(props: CardWithHeaderProps) {


  return (
    <IonCardWithHeader className="border-radius-5">
      <IonCardHeader color="primary">
        <RowCardHeader style={{justifyContent: props.titleInCenter? "center" : "space-between"}}>

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

import { IonCardContent, IonCardHeader } from "@ionic/react";

import { IonCardHeaderContentRow, IonCardHeaderTitle, RowCardHeader } from "./styles";



import CommonIconButtonStyled from "./CommonIconButtonStyled";
import { CardWithHeaderProps } from "src/types";
import { IonCardWithHeader } from "..";



function CardWithHeader(props: CardWithHeaderProps) {


  return (
    <IonCardWithHeader className="border-radius-5">
      <IonCardHeader color="primary">
        <RowCardHeader style={{ justifyContent: props.titleInCenter ? "center" : "space-between" }}>

          <IonCardHeaderTitle>{props.cardTitle?? "sdf"}</IonCardHeaderTitle>

          {props.hasIcon && <CommonIconButtonStyled />}

        </RowCardHeader>
      </IonCardHeader>

      <IonCardContent>
        <IonCardHeaderContentRow>{props.children}</IonCardHeaderContentRow>
      </IonCardContent>

    </IonCardWithHeader>
  );
}

export { CardWithHeader };

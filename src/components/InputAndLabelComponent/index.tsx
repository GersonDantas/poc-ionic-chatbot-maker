import { MyIonInputStyled, MyIonLabel } from "../MyIonComonsStyleds";
import { InputAndLabelComponentProps } from "src/types";
import { IonCol, IonRow } from "@ionic/react";
import { ColInputAndLabel } from "./styles";

function InputAndLabelComponent(props: InputAndLabelComponentProps) {
  const { label, touched, spanError } = props;
  return (
    <IonRow>
      <ColInputAndLabel>
        {label && <MyIonLabel position="stacked">{label}</MyIonLabel>}

        <MyIonInputStyled {...props} />
        {touched && spanError && <span className="input-error">{spanError}</span>}
      </ColInputAndLabel>
    </IonRow>
  );
}

export { InputAndLabelComponent };

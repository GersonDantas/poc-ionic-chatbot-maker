import { MyIonInputStyled, MyIonLabel } from "../MyIonComonsStyleds";
import { InputAndLabelComponentProps } from "src/types";
import { IonRow } from "@ionic/react";
import { ColInputAndLabel } from "./styles";

function InputAndLabelComponent(props: InputAndLabelComponentProps) {
  const { label, touched, spanError, name } = props;
  return (
    <IonRow>
      <ColInputAndLabel>
        {label && <MyIonLabel position="stacked">{label}</MyIonLabel>}

        <MyIonInputStyled 
          className={touched && spanError ? "input-error" : ""} 
          {...props}
        />
        {((touched && spanError) || (spanError)) && <span className="span-error">{spanError}</span>}
      </ColInputAndLabel>
    </IonRow>
  );
}

export { InputAndLabelComponent };

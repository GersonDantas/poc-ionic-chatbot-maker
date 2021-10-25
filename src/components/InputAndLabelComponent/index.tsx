import {MyIonInputStyled, MyIonLabel} from '../MyIonComonsStyleds';
import { IonInputProps } from "@ionic/react";

type InputAndLabelComponentProps = {
  label?: string;
} & IonInputProps;

function InputAndLabelComponent(props: InputAndLabelComponentProps) {
  return (
    <>
      {props.label && <MyIonLabel position="stacked">{props.label}</MyIonLabel>}
      <MyIonInputStyled {...props} />
    </>
  );
}

export default InputAndLabelComponent;

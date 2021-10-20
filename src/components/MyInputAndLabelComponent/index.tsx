import { MyIonInput, MyIonLabel } from "./styles";
import { IonInputProps } from "@ionic/react";

type MyInputAndLabelComponentProps = {
  label?: string;
} & IonInputProps;

function MyInputAndLabelComponent(props: MyInputAndLabelComponentProps) {
  return (
    <>
      {props.label && <MyIonLabel position="stacked">{props.label}</MyIonLabel>}
      <MyIonInput {...props} />
    </>
  );
}

export default MyInputAndLabelComponent;

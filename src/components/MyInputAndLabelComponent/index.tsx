import {MyIonInputStyled, MyIonLabel} from '../MyIonComponentsStyled';
import { IonInputProps } from "@ionic/react";

type MyInputAndLabelComponentProps = {
  label?: string;
} & IonInputProps;

function MyInputAndLabelComponent(props: MyInputAndLabelComponentProps) {
  return (
    <>
      {props.label && <MyIonLabel position="stacked">{props.label}</MyIonLabel>}
      <MyIonInputStyled {...props} />
    </>
  );
}

export default MyInputAndLabelComponent;

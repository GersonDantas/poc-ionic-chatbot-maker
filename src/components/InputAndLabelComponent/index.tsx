import { MyIonInputStyled, MyIonLabel } from "../MyIonComonsStyleds";
import { InputAndLabelComponentProps } from "src/types";

function InputAndLabelComponent(props: InputAndLabelComponentProps) {
  return (
    <>
      {props.label && <MyIonLabel position="stacked">{props.label}</MyIonLabel>}
      
      <MyIonInputStyled {...props} />
    </>
  );
}

export { InputAndLabelComponent };

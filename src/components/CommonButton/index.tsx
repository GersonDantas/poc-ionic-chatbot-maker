import {
  IonCommonButton,
  IonCommonButtonIcon,
  IonCommonButtonLabel,
} from "./styles";

import {CommonButtonProps} from "src/types"


function CommonButton(props: CommonButtonProps) {
  return (
    <IonCommonButton {...props} >

      <IonCommonButtonIcon  icon={props.faIcon!} />

      <IonCommonButtonLabel>{props.children}</IonCommonButtonLabel>

    </IonCommonButton>
  );
}

export { CommonButton };

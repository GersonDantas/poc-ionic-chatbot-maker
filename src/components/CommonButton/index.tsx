import {
  IonCommonButton,
  IonCommonButtonIcon,
  IonCommonButtonLabel,
} from "./styles";

import {CommonButtonProps} from "src/types"


function CommonButton(props: CommonButtonProps) {
  return (
    <IonCommonButton {...props} >

      {props.faIcon && (
        <IonCommonButtonIcon  icon={props.faIcon} />
      )}

      {props.children && (
        <IonCommonButtonLabel>{props.children}</IonCommonButtonLabel>
      )}

    </IonCommonButton>
  );
}

export { CommonButton };

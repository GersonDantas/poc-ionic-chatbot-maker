import {
  IonCommonButton,
  IonCommonButtonLabel,
} from "./styles";

import {CommonButtonProps} from "src/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CommonButton(props: CommonButtonProps) {
  return (
    <IonCommonButton {...props} >

      {props.faIcon && <FontAwesomeIcon  icon={props.faIcon} />}

      <IonCommonButtonLabel>{props.children}</IonCommonButtonLabel>

    </IonCommonButton>
  );
}

export { CommonButton };

import {
  IonCommonButton,
  IonCommonButtonLabel,
} from "./styles";

import { CommonButtonProps } from "src/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CommonButton(props: CommonButtonProps) {
  const { faIcon, children } = props;

  return (
    <IonCommonButton {...props} >

      {faIcon && <FontAwesomeIcon icon={faIcon} />}

      <IonCommonButtonLabel>{children}</IonCommonButtonLabel>

    </IonCommonButton>
  );
}

export { CommonButton };

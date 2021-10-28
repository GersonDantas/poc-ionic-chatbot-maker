import { ReactNode } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import {
  IonCommonButton,
  IonCommonButtonIcon,
  IonCommonButtonLabel,
} from "./styles";

import { IonButtonProps } from "src/types/types";
import {CommonButtonProps} from "src/types"


function CommonButton(props: CommonButtonProps) {
  return (
    <IonCommonButton {...props} shape={props.isRounded ? "round" : undefined}>
      {props.faIcon && <IonCommonButtonIcon icon={props.faIcon} />}
      {props.children && (
        <IonCommonButtonLabel>{props.children}</IonCommonButtonLabel>
      )}
    </IonCommonButton>
  );
}

export { CommonButton };

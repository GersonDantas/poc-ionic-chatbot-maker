import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";
import { IonButtonProps } from "src/types";

import {
  IonCommonButton,
  IonCommonButtonIcon,
  IonCommonButtonLabel,
} from "./styles";

type CommonButtonProps = {
  children?: ReactNode | undefined;
  faIcon?: IconProp | undefined;
  isRounded?: boolean | undefined;
} & IonButtonProps;

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

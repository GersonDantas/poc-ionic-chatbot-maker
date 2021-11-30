import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommonButtonProps } from 'src/types';

import {
  IonCommonButton,
  IonCommonButtonLabel,
} from './styles';

const CommonButton = function (props: CommonButtonProps) {
  const { faIcon, children } = props;

  return (
    <IonCommonButton {...props}>

      {faIcon && <FontAwesomeIcon icon={faIcon} />}

      <IonCommonButtonLabel>{children}</IonCommonButtonLabel>

    </IonCommonButton>
  );
};

export { CommonButton };

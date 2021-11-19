import { Dispatch, SetStateAction } from "react";
import { InputChangeEventDetail } from "@ionic/core/dist/types/interface";
import { User } from "src/store/dto";
import { maskToPhoneNumber } from ".";

interface valueInputProps {
  setState: Dispatch<SetStateAction<User>>;
  state: User;
  event: CustomEvent<InputChangeEventDetail>;
  name: string;
}

const valueInput = (props: valueInputProps): void => {
  if (props.name === "phoneNumber") {
    props.setState({
      ...props.state,
      phoneNumber: maskToPhoneNumber(props.event.detail.value!),
    });
  } else {
    props.setState({ ...props.state, [props.name]: props.event.detail.value });
  }
};

export { valueInput };

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
  const { name, state, event, setState } = props;
  if (name === "phoneNumber") {
    setState({
      ...state,
      phoneNumber: maskToPhoneNumber(event.detail.value!),
    });
  } else {
    setState({ ...state, [name]: event.detail.value });
  }
};

export { valueInput };

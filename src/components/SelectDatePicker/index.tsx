import { ReactNode } from "react";
import { isPlatform } from "@ionic/react";

import { Container } from "./styles";

interface SelectDatePickerProps {
  children: ReactNode;
}

function SelectDatePicker({ children }: SelectDatePickerProps) {
  return isPlatform("mobile") ? (
    <Container>é celular</Container>
  ) : (
    <Container>é web</Container>
  );
}

export default SelectDatePicker;

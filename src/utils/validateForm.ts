/* eslint-disable @typescript-eslint/no-unused-expressions */
import { PlatformUserRegister } from "src/types";
import { initialStatusError } from "src/utils";

const validateForm = (values: PlatformUserRegister) => {
  const fieldIsRequired = "Este campo é requerido.";
  const errors: PlatformUserRegister = initialStatusError;

  if(!values.email.includes("@")) {
    errors.email = "Por favor, insira um email válido."
  } else if(values.email === "") {
    errors.email = fieldIsRequired
  } else {
    errors.email = ""
  }

  if(values.password.length < 6) {
    errors.password = "Por favor, forneça ao menos 6 caracteres."
  } else if(values.password === "") {
    errors.password = fieldIsRequired
  } else {
    errors.password = ""
  }

  errors.name = values.name === "" ? fieldIsRequired : ""

  errors.whatsApp = values.whatsApp === "" ? fieldIsRequired : ""

  return errors;
};

export { validateForm };

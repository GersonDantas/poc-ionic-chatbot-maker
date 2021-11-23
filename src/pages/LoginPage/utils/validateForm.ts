import { PlatformUserRegister } from "src/types";
import { initialStatusError } from "../initialStatusObjects";

const validateForm = (values: PlatformUserRegister) => {
  const fieldIsRequired = "Este campo é requerido.";
  const errors: PlatformUserRegister = initialStatusError;

  if (values.name === "") {
    errors.name = fieldIsRequired;
  }

  if (values.email === "") {
    errors.email = fieldIsRequired;
  }

  if (!values.email.includes("@")) {
    errors.email = "Por favor, insira um email válido.";
  }

  if (values.password.length <= 6) {
    errors.password = "Por favor, forneça ao menos 6 caracteres.";
  }

  if (values.password === "") {
    errors.password = fieldIsRequired;
  }

  if (values.whatsApp === "") {
    errors.whatsApp = fieldIsRequired;
  }

  return errors;
};
export { validateForm };

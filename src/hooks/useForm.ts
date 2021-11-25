import { useState, useEffect } from "react";
import { PlatformUserRegister } from "src/types";
import { initialStatusTouched, initialStatusError } from "src/utils";

interface useFormProps {
  initialValues: PlatformUserRegister;
  validate: (values: PlatformUserRegister) => PlatformUserRegister;
}

function useForm({ initialValues, validate }: useFormProps) {
  const [touched, setTouchedFields] = useState(initialStatusTouched);
  const [errors, setErrors] = useState(initialStatusError);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);
  
  function handleChange(event: any, valueWithMask?: string) {
    const fieldName = event.target.name;
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: valueWithMask ? valueWithMask : value,
    });
    setTouchedFields({
      ...touched,
      [fieldName]: false,
    });
  }
  
  function handleBlur(event: any) {
    const fieldName = event.target.name;
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values: PlatformUserRegister) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

export { useForm };

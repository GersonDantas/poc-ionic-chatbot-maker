import { useState, useEffect, useMemo, useCallback } from "react";
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
  const [init, setInit] = useState(true);

  useEffect(() => {
    setInit(false);
    validateValues(values);
  }, [values]);

  function handleChange(event: any, valueWithMask?: string) {
    const fieldName = event.target.name;
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: !valueWithMask ? value : valueWithMask,
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
    setErrors(init ? initialStatusError : validate(values));
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

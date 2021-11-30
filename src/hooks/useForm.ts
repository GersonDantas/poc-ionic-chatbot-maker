import { useState, useEffect } from 'react';
import type { PlatformUserRegister } from 'src/types';
import { initialStatusTouched, initialStatusError } from 'src/utils';

interface useFormProps {
  initialValues: PlatformUserRegister;
  validate: (vals: PlatformUserRegister) => PlatformUserRegister;
}

function useForm({ initialValues, validate }: useFormProps): any {
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

  function clearErrors(): void {
    setErrors(initialStatusError);
  }

  function validateValues(vals: PlatformUserRegister) {
    setErrors(init ? initialStatusError : validate(vals));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
    clearErrors,
    setValues,
  };
}

export { useForm };

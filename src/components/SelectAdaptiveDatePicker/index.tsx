import { InputChangeEventDetail } from '@ionic/core';
import { isPlatform } from '@ionic/react';
import { format, isBefore } from 'date-fns';
import React from "react";
import { SelectAdaptiveDatePickerProps } from 'src/types';
import { formatUSDate } from 'src/utils';

import { IonInputMobile, IonInputWeb } from './styles';

const SelectAdaptiveDatePicker = function (props: SelectAdaptiveDatePickerProps) {
  const {
    isFinalDate, setFinalDate, setInitialDate, initialDate, finalDate,
  } = props;

  const handleIonChange = (e: CustomEvent<InputChangeEventDetail>): void => {
    if (isFinalDate) {
      setFinalDate(e.detail.value!);
    } else {
      setInitialDate(e.detail.value!);
    }
  };

  const maxDate = () => isFinalDate ? formatUSDate(new Date()) : formatUSDate(new Date(finalDate))
  const minDate = () => isFinalDate ? formatUSDate(new Date(initialDate)) : "2019"

  return isPlatform('mobile') ? (
    <IonInputMobile
      min={minDate()}
      max={maxDate()}
      monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez"
      cancelText="Cancelar"
      doneText="ok"
      displayFormat="DD/MM/YYYY"
      pickerFormat="DD MMM YYYY"
      value={isFinalDate ? finalDate : initialDate}
      onIonChange={handleIonChange}
    />
  ) : (
    <IonInputWeb
      type="date"
      min={minDate()}
      max={maxDate()}
      value={isFinalDate ? finalDate : initialDate}
      onIonChange={handleIonChange}
    />
  );
};


export { SelectAdaptiveDatePicker };

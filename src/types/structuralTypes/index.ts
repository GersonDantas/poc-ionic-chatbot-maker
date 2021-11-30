/* eslint-disable no-use-before-define */
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type * as History from 'history';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type DropDownItemProps = {
  title: string;
  dropDownObject: AppPage[];
  location: History.Location;
  faIcon?: IconProp;
  iconMoon?: string;
};

export type CardWithHeaderProps = {
  children: ReactNode;
  titleInCenter?: boolean | undefined;
  cardTitle: string;
  hasIcon?: boolean;
};

export type AppPage = {
  url: string;
  iconMoon?: string;
  faIcon?: IconProp;
  title: string;
};

export type DatetimeChangeEventDetail = {
  value: string | undefined | null;
};

export type SelectAdaptiveDatePickerProps = {
  isFinalDate?: boolean;
  initialDate: string;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
  setInitialDate: Dispatch<SetStateAction<string>>;
};

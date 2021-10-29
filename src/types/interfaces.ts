import { ReactNode } from "react";

export interface CardWithHeaderProps {
  children: ReactNode;
  titleInCenter?: boolean | undefined;
  cardTitle: string;
  hasIcon?: boolean | undefined;
}

export interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

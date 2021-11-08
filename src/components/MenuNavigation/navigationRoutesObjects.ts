import { AppPage } from "src/types";
import {
  statsChart,
  statsChartOutline,
  settings,
  settingsOutline,
  options,
  optionsOutline,
  person,
  personOutline,
  grid,
  gridOutline,
  chatbubbles,
  chatbubblesOutline,
  logoAndroid,
} from "ionicons/icons";

export const topMenuList: AppPage[] = [
  {
    title: "Chatbot",
    url: "/page/gestao/chatbot",
    iosIcon: logoAndroid,
    mdIcon: logoAndroid,
  },
];

export const mediumMenuList: AppPage[] = [
  {
    title: "Painel",
    url: "/page/painel",
    iosIcon: statsChartOutline,
    mdIcon: statsChart,
  },
  {
    title: "Conversas",
    url: "/page/conversas",
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubbles,
  },
  {
    title: "Habilidades",
    url: "/page/habilidades",
    iosIcon: optionsOutline,
    mdIcon: options,
  },
  {
    title: "Configurações",
    url: "/page/configuracoes",
    iosIcon: settingsOutline,
    mdIcon: settings,
  },
];

export const listDownMenu: AppPage[] = [
  {
    title: "Meu Perfil",
    url: "/page/perfil",
    iosIcon: personOutline,
    mdIcon: person,
  },
];

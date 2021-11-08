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
    iconMoon: "graph"
  },
  {
    title: "Conversas",
    url: "/page/conversas",
    iconMoon: "chat-o"
  },
];

export const settingsMenuList: AppPage[] = [
  {
    title: "Geral",
    url: "/page/configuracoes/geral",
    iconMoon: "files",
  },
  {
    title: "Modelo de Menssagem",
    url: "/page/configuracoes/modelo-mensagem",
    iconMoon: "messages",
  },
];

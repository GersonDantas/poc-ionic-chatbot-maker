import type { AppPage } from 'src/types';

export const managementMenu: AppPage[] = [
  {
    title: 'Chatbot',
    url: '/page/gestao/chatbot',
    faIcon: 'robot',
  },
  {
    title: 'Instâncias',
    url: '/page/gestao/instancias',
    faIcon: 'cubes',
  },
];

export const mediumMenuList: AppPage[] = [
  {
    title: 'Painel',
    url: '/page/painel',
    iconMoon: 'graph',
  },
  {
    title: 'Conversas',
    url: '/page/conversas',
    iconMoon: 'chat-o',
  },
];

export const settingsMenuList: AppPage[] = [
  {
    title: 'Geral',
    url: '/page/configuracoes/geral',
    iconMoon: 'files',
  },
  {
    title: 'Modelo de Menssagem',
    url: '/page/configuracoes/modelo-mensagem',
    iconMoon: 'messages',
  },
];

export const skillsMenu: AppPage[] = [
  {
    title: 'Perfil',
    url: '/page/habilidades/Perfil',
    iconMoon: 'person',
  },
  {
    title: 'Endereço',
    url: '/page/habilidades/endereco',
    iconMoon: 'address',
  },
  {
    title: 'Horários',
    url: '/page/habilidades/horarios',
    iconMoon: 'time-o',
  },
  {
    title: 'Pesquisa de Satisfação',
    url: '/page/habilidades/Pesquisa-de-satisfacao',
    iconMoon: 'medal',
  },
  {
    title: 'Encerramento automático',
    url: '/page/habilidades/encerramento-automatico',
    iconMoon: 'loop',
  },
  {
    title: 'Intençoes da IA',
    url: '/page/habilidades/intencoes-da-ia',
    iconMoon: 'ai',
  },
  {
    title: 'Boas vindas',
    url: '/page/habilidades/boas-vindas',
    iconMoon: 'welcome',
  },
  {
    title: 'Resgate',
    url: '/page/habilidades/resgate',
    iconMoon: 'fallback',
  },
  {
    title: 'Menu',
    url: '/page/habilidades/menu',
    iconMoon: 'menu',
  },
];

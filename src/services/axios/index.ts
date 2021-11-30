import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portal-staging.chatbotmaker.io',
});

export { api };

import axios, { AxiosInstance } from "axios";


const apiWithToken = (token?: string | undefined): AxiosInstance => {
  const api = axios.create({
    baseURL: "https://portal-staging.chatbotmaker.io",
  });

  if (token) {
    api.defaults.headers.common["Authorization"] = token
	}
  
	return api;
};

const api = apiWithToken();

export { api, apiWithToken };

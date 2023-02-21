import axios, { AxiosInstance, CancelToken } from "axios";
import { INTEGRATIONS_BASE_URL } from "../config/urls";

const source = CancelToken.source();
const requestInterceptor = async (config) => {
  config.cancelToken = source.token;
  return config;
};
let instance;

export const integrationsClient = (auth, contentType) => {
  if (instance) return instance;
  instance = axios.create({
    baseURL: INTEGRATIONS_BASE_URL,
    timeout: 15000,
    headers: {
      'Content-Type': contentType,
      Authorization: auth
    },
    withCredentials: false
  });

  // @ts-ignore
  instance.interceptors.request.use(requestInterceptor);
  return instance;
};
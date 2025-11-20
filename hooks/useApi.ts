
import axios from "axios";
import { getToken } from "../services/storage/tokenStorage";

export function useApi() {
  const api = axios.create({
    baseURL: "https://your-api.com"
  });

  api.interceptors.request.use(async (config) => {
    const t = await getToken();
    if (t) config.headers.Authorization = `Bearer ${t}`;
    return config;
  });

  return api;
}

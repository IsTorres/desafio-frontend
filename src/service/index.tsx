import axios, { AxiosInstance } from "axios";
import md5 from "md5";

const VITE_PUBLIC_API_URL = "https://gateway.marvel.com";
const VITE_PUBLIC_API_KEY = "4a32cc9eabad270186710953f8d81c44";
const VITE_PRIVATE_API_KEY = "56b7aeb535744220be8e1b374bcb4fec429a5353";

const ts = Number(new Date());

const hash = md5(ts + VITE_PRIVATE_API_KEY + VITE_PUBLIC_API_KEY);

const api: AxiosInstance = axios.create({
  baseURL: `${VITE_PUBLIC_API_URL}/v1/public/`,
});

const defaultParams = {
  format: "comic",
  formatType: "comic",
  ts,
  apikey: VITE_PUBLIC_API_KEY,
  hash,
};

export const fetchComicsWithParams = async (dateDescriptor: string) => {
  try {
    const request = await api.get("comics", {
      params: {
        dateDescriptor,
        limit: 100,
        ...defaultParams,
      },
    });
    return request.data.data.results;
  } catch (error) {
    console.error("Erro ao buscar quadrinhos:", error);
    throw error;
  }
};

export const fetchSpecificComicById = async (id: number) => {
  try {
    const request = await api.get("comics", {
      params: {
        ...defaultParams,
        id,
      },
    });
    return request;
  } catch (error) {}
};

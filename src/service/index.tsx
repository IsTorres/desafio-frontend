import axios from "axios";
import md5 from "md5";

const VITE_PUBLIC_API_URL = "https://gateway.marvel.com";
const VITE_PUBLIC_API_KEY = "4a32cc9eabad270186710953f8d81c44";
const VITE_PRIVATE_API_KEY = "56b7aeb535744220be8e1b374bcb4fec429a5353";

const ts = Number(new Date());

const hash = md5(ts + VITE_PRIVATE_API_KEY + VITE_PUBLIC_API_KEY);

export const fetchAPI = async () => {
  const request = await axios.get(
    `${VITE_PUBLIC_API_URL}/v1/public/comics?ts=${ts}&apikey=${VITE_PUBLIC_API_KEY}&hash=${hash}`
  );
  return request.data.data.results;
};

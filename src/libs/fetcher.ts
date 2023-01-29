import axios from "./axios";

export const fetcherGET = (url: string) =>
  axios.get(url).then((res) => res.data);

export const fetcherPOST = (url: string, { arg: data }: { arg?: unknown }) => {
  return axios.post(url, data).then((res) => res.data);
};

export const fetcherDELETE = (url: string) =>
  axios.delete(url).then((res) => res.data);

export const fetcherPUT = (url: string, data?: unknown) =>
  axios.put(url, data).then((res) => res.data);

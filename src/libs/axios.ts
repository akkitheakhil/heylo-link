import Axios from "axios";

const axiosClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_HOST_URL ?? "http://localhost:3000/",
});

export default axiosClient;

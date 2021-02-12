import axios from "axios";

const api = axios.create({
  baseURL: "https://temtem-api.mael.tech/api"
});

export default api;

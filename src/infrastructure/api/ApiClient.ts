import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

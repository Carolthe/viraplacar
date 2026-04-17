// backend/src/services/api.js ou frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "https://backend-production-4a532.up.railway.app/api", // usa a variável do .env
  withCredentials: true, // se quiser enviar cookies HttpOnly
});

export default api;
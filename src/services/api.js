// backend/src/services/api.js ou frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000/api", // usa a variável do .env
  withCredentials: true, // se quiser enviar cookies HttpOnly
});

export default api;
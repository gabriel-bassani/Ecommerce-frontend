// src/plugins/axios.js
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8000/api', // Endereço do backend
});

export default Api;

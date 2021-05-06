import axios from 'axios';

const api = axios.create({
//   baseURL: 'https://o-socio-br.herokuapp.com/'
  baseURL: 'http://localhost:3001/'
});

export default api;
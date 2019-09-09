import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.defaults.withCredentials = true;
instance.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
instance.defaults.xsrfCookieName = 'csrftoken';

export default instance;

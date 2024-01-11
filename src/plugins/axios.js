import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://mall-api.icanim.com', //test bed
  baseURL: 'https://service.icanmall.net', // live

});

export default instance;
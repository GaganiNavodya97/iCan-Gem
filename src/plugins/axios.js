import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://mall-api.icanim.com', //need to change this to live
  baseURL: 'https://service.icanmall.net', //need to change this to live

});

export default instance;
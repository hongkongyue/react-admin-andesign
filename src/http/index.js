
import Axios from 'axios'
let  axios = Axios.create({
  baseURL: '',
  timeout: 600000,
  withCredentials: true, //是否允许跨域
  headers: { 'Content-Type': 'application/json;charset=UTF-8', 'X-Requested-With': 'XMLHttpRequest', 'token': sessionStorage.getItem('token') },
  //返回数据类型
  responseType: 'json'
})

axios.interceptors.request.use(function (config) {
  //在发送请求之前做某事
  return config;
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function (response) {
  //对响应数据做些事
  if (response.data.Code === 0) {
    return response.data;
  } else if (response.data.Code === 1) {
    return response.Message;
  }
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
})

export default axios

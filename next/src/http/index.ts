import axios from "axios";
import { cookies } from 'next/headers'




const url = "http://localhost:1337/api"

export const $axios = axios.create({
    withCredentials: true, 
    baseURL: url
  });




$axios.interceptors.request.use(function (config) {
  const cookie = cookies()
  const token = cookie.get('token')?.value
  console.log(token)
 if(token){
    $axios.defaults.headers.authorization =`bearer ${token}`
    console.log($axios.defaults.headers.authorization)
 } else {
  delete $axios.defaults.headers.authorization
 }
     return config;
  }, function (error) {
    // Сделайте что-нибудь с ошибкой запроса
    return Promise.reject(error);
  });



  axios.interceptors.response.use(function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response;
  }, function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    return Promise.reject(error);
  });
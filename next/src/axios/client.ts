import axios from "axios";




const url = "http://localhost:1337/api"

export const $apiClient = axios.create({
    withCredentials: true, 
    baseURL: url
  });




// $apiClient.interceptors.request.use(function (config) {

//      return config;
//   }, function (error) {
//     // Сделайте что-нибудь с ошибкой запроса
//     return Promise.reject(error);
//   });



//   axios.interceptors.response.use(function (response) {
//     // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
//     // Здесь можете сделать что-нибудь с ответом
//     return response;
//   }, function (error) {
//     // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
//     // Здесь можете сделать что-то с ошибкой ответа
//     return Promise.reject(error);
//   });
import axios from 'axios'
import { cookies } from 'next/headers';



export const $axios = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
  });


  // Добавляем перехват запросов
$axios.interceptors.request.use(function (config) {
    const cookie = cookies();
    const token = cookie.get('token');

    if(token) {
      config.headers.Authorization = `Bearer ${token.value}`
    }
    
    return config;
  }, function (error) {
    console.error(error.status)
    return Promise.reject(error);
  });

// Добавляем перехват ответов
$axios.interceptors.response.use(function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response;
  }, function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    return Promise.reject(error);
  });
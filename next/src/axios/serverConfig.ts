import axios from 'axios'
import { cookies } from 'next/headers';


export const $apiServer_CMS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_CMS_URL,
    withCredentials: true
  });



$apiServer_CMS.interceptors.request.use(function (config) {
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


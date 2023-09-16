import axios from "axios";




export const $apiClient_NEXT = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_NEXT_URL
  })


export const $apiClient_CMS = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CMS_URL
})
  
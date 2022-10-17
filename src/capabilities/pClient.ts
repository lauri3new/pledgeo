import axios from "axios"

export const pClient = axios.create({
  baseURL: process.env.REACT_APP_PBP_PLEDGE_URL
})

import axios from "axios"

export const pbpClient = axios.create({
  baseURL: process.env.REACT_APP_PBP_BASE_URL,
  headers: {
    authorization: process.env.REACT_APP_PBP_PK
  }
})

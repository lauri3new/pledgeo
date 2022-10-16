import axios from "axios"

export const pClient = axios.create({
  baseURL: 'https://us-central1-pledgeo.cloudfunctions.net/api/'
})

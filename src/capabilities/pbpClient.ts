import axios from "axios"

export const pbpClient = axios.create({
  baseURL: 'https://staging-api.poweredbypercent.com/v1/',
  headers: {
    authorization: 'staging_pk_e0f4b2b2-6d67-43e1-8e6d-92e7db1d2ad5'
  }
})

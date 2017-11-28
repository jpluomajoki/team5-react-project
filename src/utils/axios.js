import axios from 'axios'
import * as config from '../config'

axios.defaults.responseType = 'json'

export const client = axios.create({
  baseURL: config.API_URL,
  withCredentials: false
})

export const setTokenHeader = value => {
  client.defaults.headers.token = value
}

export const clearTokenHeader = () => {
  client.defaults.headers.token = null
}

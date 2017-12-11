import axios from 'axios'
import * as config from '../config'

axios.defaults.responseType = 'json'

let defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const client = axios.create({
  baseURL: config.API_URL,
  withCredentials: false,
  headers: {
    'Accept-Language': 'fi'
  }
})

export const setLanguageHeader = value => {
  client.defaults.headers = {
    ...defaultHeaders,
    'Accept-Language': value
  }
}

import axios from 'axios'

const api = axios.create({
  //   baseURL: 'https://9154-45-176-66-66.ngrok-free.app',
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api

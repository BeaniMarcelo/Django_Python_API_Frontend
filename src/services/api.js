import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getUsers() {
    return api.get('/users/')
  },
  
  createUser(userData) {
    return api.post('/users/create', userData)
  }
}


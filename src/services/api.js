import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
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


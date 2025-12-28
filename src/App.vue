<template>
  <div id="app">
    <div class="container">
      <h1>User Management System</h1>
      
      <div v-if="error" class="error">
        {{ error }}
      </div>
      
      <div v-if="successMessage" class="success">
        {{ successMessage }}
      </div>

      <h2>Add New User</h2>
      <form @submit.prevent="createUser">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Enter user name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input
            type="number"
            id="age"
            v-model.number="formData.age"
            required
            min="1"
            placeholder="Enter user age"
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Creating...' : 'Create User' }}
        </button>
      </form>
    </div>

    <div class="container">
      <h2>Users List</h2>
      <div v-if="loadingUsers" class="loading">Loading users...</div>
      <div v-else-if="users.length === 0" class="empty-state">
        No users found. Create your first user above!
      </div>
      <div v-else class="users-list">
        <div v-for="user in users" :key="user.id" class="user-card">
          <h3>{{ user.name }}</h3>
          <p><strong>Age:</strong> {{ user.age }}</p>
          <p><strong>ID:</strong> {{ user.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import api from './services/api'

export default {
  name: 'App',
  setup() {
    const users = ref([])
    const loading = ref(false)
    const loadingUsers = ref(false)
    const error = ref('')
    const successMessage = ref('')
    const formData = ref({
      name: '',
      age: null
    })

    const fetchUsers = async () => {
      loadingUsers.value = true
      error.value = ''
      try {
        const response = await api.getUsers()
        users.value = response.data
      } catch (err) {
        error.value = 'Failed to fetch users: ' + (err.response?.data?.message || err.message)
      } finally {
        loadingUsers.value = false
      }
    }

    const createUser = async () => {
      loading.value = true
      error.value = ''
      successMessage.value = ''
      
      try {
        const response = await api.createUser(formData.value)
        successMessage.value = `User "${response.data.name}" created successfully!`
        formData.value = { name: '', age: null }
        await fetchUsers()
      } catch (err) {
        error.value = 'Failed to create user: ' + (err.response?.data?.message || err.message)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchUsers()
    })

    return {
      users,
      loading,
      loadingUsers,
      error,
      successMessage,
      formData,
      createUser
    }
  }
}
</script>


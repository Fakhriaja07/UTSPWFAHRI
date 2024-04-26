<template>
    <div class="login-container">
      <h1>LOGIN</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit" class="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        users: [
          { username: 'mahasiswa', password: 'mahasiswa', role: 'mahasiswa' },
          { username: 'dosen', password: 'dosen', role: 'dosen' }
        ]
      };
    },
    methods: {
      login() {
        const user = this.users.find(user => user.username === this.username && user.password === this.password);
        if (user) {
          // Redirect to dashboard or home page upon successful login
          if (user.role === 'mahasiswa') {
            // Misalkan Anda menggunakan Vue Router untuk navigasi
            this.$router.push('/halberandamahasiswa');
          } else if (user.role === 'dosen') {
            this.$router.push('/halberandadosen');
          }
        } else {
          // Handle invalid login
          alert('Invalid username or password');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
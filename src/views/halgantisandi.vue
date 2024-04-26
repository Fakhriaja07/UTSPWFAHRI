<template>
    <div class="forgot-password-container">
      <h1>Lupa Sandi</h1>
      <form @submit.prevent="resetPassword">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <button type="submit">Kirim Tautan Reset Sandi</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      resetPassword() {
        // Kirim tautan reset sandi ke email yang dimasukkan
        console.log('Mengirim tautan reset sandi ke:', this.email);
        // Tambahkan logika untuk mengirim tautan reset sandi melalui email
        // Setelah berhasil, Anda dapat mengarahkan pengguna ke halaman konfirmasi
      }
    }
  };
  </script>
  
  <style scoped>
  .forgot-password-container {
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
  
  input[type="email"] {
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
  
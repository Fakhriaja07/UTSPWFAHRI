<template>
    <main id="home-page">
      <h1>Riwayat</h1>
      <div class="container">
        <div class="table-container">
          <table class="empty-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal Setoran</th>
                <th>Surah</th>
                <th>Ayat</th>
                <th>Catatan</th>
                <th>Status</th>
                <th>Aksi</th> <!-- Kolom tambahan untuk tombol -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.tanggal }}</td>
                <td>{{ item.surah }}</td>
                <td>{{ item.ayat }}</td>
                <td>{{ item.catatan }}</td>
                <td>{{ item.status }}</td>
                <td>
                  <button class="edit-button" @click="showEditForm(index)">Edit</button>
                  <button class="delete-button" @click="deleteRow(index)">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Formulir tambah -->
      <div v-if="isAddFormVisible" class="edit-form">
        <h2>Tambah Data</h2>
        <form @submit.prevent="addRow()">
          <label for="addTanggal">Tanggal Setoran:</label>
          <input type="text" v-model="addFormData.tanggal" id="addTanggal">
          <label for="addSurah">Surah:</label>
          <input type="text" v-model="addFormData.surah" id="addSurah">
          <label for="addAyat">Ayat:</label>
          <input type="text" v-model="addFormData.ayat" id="addAyat">
          <label for="addCatatan">Catatan:</label>
          <input type="text" v-model="addFormData.catatan" id="addCatatan">
          <label for="addStatus">Status:</label>
          <input type="text" v-model="addFormData.status" id="addStatus">
          <button type="submit">Simpan</button>
          <button @click="cancelAdd">Batal</button>
        </form>
      </div>
      <!-- Tombol tambah baris -->
      <button class="add-button" @click="showAddForm">Tambah Data</button>
    </main>
  </template>
  
  <script>
  export default {
    name: 'HalRiwayatDosen',
    data() {
      return {
        data: [
          { tanggal: '2024-04-15', surah: "An-Naba'", ayat: '1-20', catatan: 'Belajar mengaji', status: 'Belum Selesai' },
          { tanggal: '2024-04-16', surah: "An-Nazi'at", ayat: '1-46', catatan: 'Memorize', status: 'Selesai' }
        ],
        isAddFormVisible: false,
        addFormData: {
          tanggal: '',
          surah: '',
          ayat: '',
          catatan: '',
          status: ''
        }
      };
    },
    methods: {
      showEditForm(index) {
        this.isEditFormVisible = true;
        this.editRowIndex = index;
        // Populate form data with current row values
        this.editFormData = { ...this.data[index] };
      },
      editRow() {
        this.data[this.editRowIndex] = { ...this.editFormData };
        this.isEditFormVisible = false;
      },
      showAddForm() {
        this.isAddFormVisible = true;
        this.resetForm();
      },
      addRow() {
        this.data.push({ ...this.addFormData });
        this.isAddFormVisible = false;
        this.resetForm();
      },
      cancelAdd() {
        this.isAddFormVisible = false;
        this.resetForm();
      },
      deleteRow(index) {
        this.data.splice(index, 1);
      },
      resetForm() {
        this.addFormData = {
          tanggal: '',
          surah: '',
          ayat: '',
          catatan: '',
          status: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center; /* Pusatkan konten horizontal */
  }
  
  .table-container {
    margin-right: 700px;
  }
  
  .empty-table, .data-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .empty-table th, .empty-table td, .data-table th, .data-table td {
    border: 1px solid #ddd;
    padding: 20px;
    text-align: left;
  }
  
  .empty-table th, .data-table th {
    background-color: #f2f2f2;
  }
  
  /* Warna tombol untuk kolom Aksi */
  .edit-button, .delete-button, .add-button {
	padding: 8px 16px;
	border: none;
	cursor: pointer;
	border-radius: 4px;
	transition: background-color 0.3s;
  }
  
  .edit-button {
	background-color: #4CAF50; /* Green */
	color: white;
  }
  
  .delete-button {
	background-color: #f44336; /* Red */
	color: white;
  }
  
  .add-button {
    background-color: #008CBA; /* Blue */
    color: white;
  }
  
  /* Efek hover untuk tombol pada kolom Aksi */
  .edit-button:hover, .delete-button:hover, .add-button:hover {
    background-color: #45a049; /* Darker green */
  }
  
  .edit-form {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .edit-form label {
    display: block;
    margin-bottom: 5px;
  }
  
  .edit-form input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .edit-form button {
    padding: 8px 16px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .edit-form button[type="submit"] {
    background-color: #4CAF50; /* Green */
    color: white;
  }
  
  .edit-form button[type="submit"]:hover {
    background-color: #45a049; /* Darker green */
  }
  
  .edit-form button[type="reset"] {
    background-color: #f44336; /* Red */
  }
  
  .edit-form button[type="reset"]:hover {
    background-color: #c63733; /* Darker red */
  }
  </style>
  
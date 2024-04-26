<template>
	<main id="about-page">
	  <h1>Setoran</h1>
	  <div class="container">
		<div class="table-container">
		  <!-- Tabel kosong di sebelah kiri -->
		  <table class="empty-table">
			<thead>
			  <tr>
				<th>No</th>
				<th>Surah</th>
				<th>Keterangan</th>
				<th>Status</th>
				<th>Aksi</th> <!-- Kolom tambahan untuk tombol -->
			  </tr>
			</thead>
			<tbody>
			  <!-- Isi tabel kosong -->
			  <tr v-for="(item, index) in data" :key="index">
				<td>{{ index + 1 }}</td>
				<td>{{ item.surah }}</td>
				<td>{{ item.keterangan }}</td>
				<td>{{ item.status }}</td>
				<td>
				  <button class="edit-button" @click="showEditForm(index)">Edit</button>
				  <button class="delete-button" @click="deleteRow(index)">Hapus</button>
				</td> <!-- Tombol untuk mengedit dan menghapus baris -->
			  </tr>
			  <!-- Tambahkan baris sesuai kebutuhan -->
			</tbody>
		  </table>
		  <!-- Tombol tambah baris -->
		  <button class="add-button" @click="showAddForm">Tambah Data</button>
		</div>
	  </div>
	  <!-- Formulir edit -->
	  <div v-if="isEditFormVisible || isAddFormVisible" class="edit-form">
		<h2>{{ isEditFormVisible ? 'Edit Data' : 'Tambah Data' }}</h2>
		<form @submit.prevent="isEditFormVisible ? editRow() : addRow()">
		  <label for="editSurah">Surah:</label>
		  <input type="text" v-model="editFormData.surah" id="editSurah">
		  <label for="editKeterangan">Keterangan:</label>
		  <input type="text" v-model="editFormData.keterangan" id="editKeterangan">
		  <label for="editStatus">Status:</label>
		  <input type="text" v-model="editFormData.status" id="editStatus">
		  <button type="submit">{{ isEditFormVisible ? 'Simpan' : 'Tambah' }}</button>
		  <button @click="cancelEdit">Batal</button>
		</form>
	  </div>
	</main>
  </template>
  
  <script>
  export default {
	name: 'HalSetoranMahasiswa',
	data() {
	  return {
		data: [
		  { surah: 'An-Naba', keterangan: 'Membaca setiap hari', status: 'Selesai' },
		  { surah: 'Al-Naziat', keterangan: 'Mempelajari tafsir', status: 'Belum selesai' }
		],
		isEditFormVisible: false,
		isAddFormVisible: false,
		editRowIndex: null,
		editFormData: {
		  surah: '',
		  keterangan: '',
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
	  showAddForm() {
		this.isAddFormVisible = true;
		this.resetForm();
	  },
	  editRow() {
		this.data[this.editRowIndex] = { ...this.editFormData };
		this.isEditFormVisible = false;
	  },
	  addRow() {
		this.data.push({ ...this.editFormData });
		this.isAddFormVisible = false;
	  },
	  cancelEdit() {
		this.isEditFormVisible = false;
		this.isAddFormVisible = false;
		this.resetForm();
	  },
	  deleteRow(index) {
		this.data.splice(index, 1);
	  },
	  resetForm() {
		this.editRowIndex = null;
		this.editFormData = {
		  surah: '',
		  keterangan: '',
		  status: ''
		};
	  }
	}
  }
  </script>
  
  <style scoped>
  .container {
	display: flex;
	justify-content: center; /* Pusatkan konten horizontal */
  }
  
  .table-container {
	margin-right: 800px;
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
  
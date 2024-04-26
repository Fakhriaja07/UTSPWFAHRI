<template>
	<main id="home-page">
	  <h1>Beranda</h1>
	  <div class="container">
		<div class="table-container">
		  <!-- Tabel kosong di sebelah kiri -->
		  <table class="empty-table">
			<thead>
			  <tr>
				<th>No</th>
				<th>Nama</th>
				<th>Semester</th>
				<th>Aksi</th> <!-- Kolom tambahan untuk tombol -->
			  </tr>
			</thead>
			<tbody>
			  <!-- Isi tabel kosong -->
			  <tr v-for="(mahasiswa, index) in mahasiswaList" :key="index">
				<td>{{ index + 1 }}</td>
				<td>{{ mahasiswa.nama }}</td>
				<td>{{ mahasiswa.semester }}</td>
				<td>
				  <button class="edit-button" @click="showEditForm(index)">Edit</button>
				  <button class="delete-button" @click="deleteRow(index)">Hapus</button>
				</td> <!-- Tombol untuk mengedit dan menghapus baris -->
			  </tr>
			  <!-- Tambahkan baris sesuai kebutuhan -->
			</tbody>
		  </table>
		</div>
		<div class="add-button-container">
		</div>
	  </div>
	  <!-- Formulir edit -->
	  <div v-if="isEditFormVisible || isAddFormVisible" class="edit-form">
		<h2 v-if="isAddFormVisible">Tambah Data</h2>
		<h2 v-else>Edit Data</h2>
		<form @submit.prevent="submitForm">
		  <label for="editNama">Nama:</label>
		  <input type="text" v-model="editFormData.nama" id="editNama">
		  <label for="editSemester">Semester:</label>
		  <input type="text" v-model="editFormData.semester" id="editSemester">
		  <button type="submit">{{ isAddFormVisible ? 'Tambah' : 'Simpan' }}</button>
		  <button @click="cancelAdd">Batal</button>
		  
		</form>
	  </div>
	  <button class="add-button" @click="showAddForm">Tambah Data</button>
	</main>
  </template>
  
  <script>
  export default {
	name: 'HalBerandaDosen',
	data() {
	  return {
		mahasiswaList: [
		  { nama: 'Muhammad Ardiansyah', semester: 4 },
		],
		isEditFormVisible: false,
		isAddFormVisible: false,
		editRowIndex: null,
		editFormData: {
		  nama: '',
		  semester: ''
		}
	  };
	},
	methods: {
	  showEditForm(index) {
		this.isEditFormVisible = true;
		this.editRowIndex = index;
		// Populate form data with current row values
		this.editFormData = { ...this.mahasiswaList[index] };
	  },
	  showAddForm() {
		this.isAddFormVisible = true;
		this.editFormData = { nama: '', semester: '' };
	  },
	  submitForm() {
		if (this.isAddFormVisible) {
		  this.mahasiswaList.push({ ...this.editFormData });
		  this.isAddFormVisible = false;
		} else {
		  this.mahasiswaList[this.editRowIndex] = { ...this.editFormData };
		  this.isEditFormVisible = false;
		}
	  },
	  cancelEdit() {
		this.isEditFormVisible = false;
		this.isAddFormVisible = false;
		this.editRowIndex = null;
		this.editFormData = {
		  nama: '',
		  semester: ''
		};
	  },
	  deleteRow(index) {
		this.mahasiswaList.splice(index, 1);
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
  
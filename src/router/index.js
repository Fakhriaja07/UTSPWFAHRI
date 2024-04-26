import { createRouter, createWebHistory } from 'vue-router'
import halberandamahasiswa from '../views/halberandamahasiswa.vue'
import halsetoranmahasiswa from '../views/halsetoranmahasiswa.vue'
import halriwayatmahasiswa from '../views/halriwayatmahasiswa.vue'
import halberandadosen from '../views/halberandadosen.vue'
import halsetorandosen from '../views/halsetorandosen.vue'
import halriwayatdosen from '../views/halriwayatdosen.vue'
import halmasuk from '../views/halmasuk.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/halmasuk',
			name:'halmasuk',
			component: halmasuk
		},
		{
			path: '/halberandadosen',
			name:'halberandadosen',
			component: halberandadosen
		},
		{
			path: '/halberandamahasiswa',
			name:'halberandamahasiswa',
			component: halberandamahasiswa
		},
		{
			path: '/halsetoranmahasiswa',
			name:'halsetoranmahasiswa',
			component: halsetoranmahasiswa
		},
		{
			path: '/halsetorandosen',
			name:'halsetorandosen',
			component: halsetorandosen
		},
		{
			path: '/halriwayatmahasiswa',
			name:'halriwayatmahasiswa',
			component: halriwayatmahasiswa
		},
		{
			path: '/halriwayatdosen',
			name:'halriwayatdosen',
			component: halriwayatdosen
		},
		
	],
})

export default router
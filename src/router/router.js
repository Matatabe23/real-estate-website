import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import catalog from '@/pages/catalog.vue'
import services from '@/pages/services.vue'
import Contacts from '@/pages/Contacts.vue'
import AboutCompany from '@/pages/AboutCompany.vue'

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/catalog',
		component: catalog,
	},
	{
		path: '/services',
		component: services,
	},
	{
		path: '/Contacts',
		component: Contacts,
	},
	{
		path: '/AboutCompany',
		component: AboutCompany,
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory(process.env.BASE_URL)
})

export default router;
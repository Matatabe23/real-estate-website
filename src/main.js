import { createApp } from 'vue'
import App from './App'
import router from './router/router';

import componentUI from '@/Components/UI'
import componentPanels from '@/Components/panels'

import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App)

//Глобально в проекте регестрируем UI, Panel, Other компоненты
const components = [...componentUI, ...componentPanels];
components.forEach(component => {
	app.component(component.name, component);
});


app
		.use(router)
		.mount('#app');
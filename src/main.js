/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import Previewer from 'virtual:vue-component-preview';

const app = createApp(App)
app.use(Previewer)

registerPlugins(app)

app.mount('#app')

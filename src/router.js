import { createRouter, createWebHistory } from 'vue-router'
import TimeTable from './components/TimeTable.vue'
import About from './components/About.vue'

const routes = [
    { path: '/', component: TimeTable },
    { path: '/about', component: About },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


export default router

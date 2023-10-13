import { createRouter, createWebHashHistory } from 'vue-router'
import TimeTable from './components/TimeTable.vue'
import About from './components/About.vue'

const routes = [
    { path: '/', component: TimeTable },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    base: "/dental/reserve/",
})


export default router

import {createRouter, createWebHistory} from "vue-router"
import TheAdd from "./pages/TheAdd.vue"
import TheHome from "./pages/TheHome.vue"
import TheTasks from "./pages/TheTasks.vue"
import TheTask from "./pages/TheTask.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: TheHome},
        {path: "/add", component: TheAdd},
        {path: "/tasks", component: TheTasks},
        {path: "/task/:id", name: 'task',component: TheTask},
    ]
})

export default router;
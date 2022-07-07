import {RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router"
import taskRouter from "../modules/Task/task.router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/tasks"
    },
    taskRouter,
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
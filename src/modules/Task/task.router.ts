import {RouteRecordRaw} from "vue-router";
import Task from "./task.main.vue"
import {TaskRepository} from "@/modules/Task/services/task.repository";

const taskRepository = new TaskRepository()

const taskRoutes: RouteRecordRaw = {
    path: "/tasks",
    component: Task,
    children: [
        {
            path: "",
            component: () => import('./pages/index.vue'),
            props : {
                taskRepository
            }
        }
    ]
}

export default taskRoutes
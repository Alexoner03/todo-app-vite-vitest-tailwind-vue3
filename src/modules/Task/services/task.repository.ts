import Task from "@/modules/Task/entities/Task.entity";
import {Importance, State} from "@/modules/Task/entities/enums.d";

export class TaskRepository {
    async getTasks(): Promise<Task[]> {
        return Promise.resolve([
            {
                title: "Task 1",
                description : "lorem",
                state: State.ACTIVE,
                importance: Importance.HIGH,
                date: new Date()
            }
        ])
    }
}
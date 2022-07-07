import {beforeEach, describe, vi} from "vitest";
import {render, screen, waitFor} from "@testing-library/vue";
import "@testing-library/jest-dom"
import Index from '../pages/index.vue'
import {TaskRepository} from "@/modules/Task/services/task.repository";
import {Importance, State} from "@/modules/Task/entities/enums.d";

vi.mock("../services/task.repository", () => {
   return vi.fn().mockImplementation(() => {
     return {
         getTasks: vi.fn()
     }
   })
})

describe('List Tasks', () => {
    let taskRepository;

    beforeEach(() => {
        taskRepository = new TaskRepository()
        vi.clearAllMocks()
    })

    it('Should list a task', async () => {

        taskRepository.getTasks.mockResolvedValue([
            {
                name: "Task 2",
                state: State.ACTIVE,
                importance: Importance.HIGH,
                date: new Date()
            }
        ])

        render(Index, {
            props: {
                taskRepository
            }
        })

        await waitFor(() => {
            expect(screen.getByText("Task 2")).toBeInTheDocument()
        })
    })
})
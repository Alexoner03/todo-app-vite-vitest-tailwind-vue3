import {render, screen, waitFor} from "@testing-library/vue";
import "@testing-library/jest-dom"
import Index from '../pages/index.vue'
import {TaskRepository} from "@/modules/Task/services/task.repository";
import {Importance, State} from "@/modules/Task/entities/enums.d";
import {beforeEach} from "vitest";

vi.mock("@/modules/Task/services/task.repository")

describe('List Tasks', () => {

    beforeEach(() =>{
        vi.resetAllMocks();
    })

    it('Should list a task', async () => {

        TaskRepository.mockImplementation(() => {
            return {
                getTasks: async () => Promise.resolve([
                    {
                        name: "Task 2",
                        state: State.ACTIVE,
                        importance: Importance.HIGH,
                        date: new Date()
                    }
                ])
            }
        })

        const taskRepository = new TaskRepository()

        render(Index, {
            props: {
                taskRepository
            }
        })

        await waitFor(() => {
            expect(screen.getByText("Task 2")).toBeInTheDocument()
            expect(screen.getByText("En curso")).toBeInTheDocument()
            expect(screen.getByText("Alta")).toBeInTheDocument()
        })
    })
})
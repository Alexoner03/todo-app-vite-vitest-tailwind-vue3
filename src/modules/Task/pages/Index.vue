<script setup lang="ts">
import {ref} from "vue";
import TaskItem from "../components/TaskItem.vue"
import FormModal from "../components/FormModal.vue"
import {TaskRepository} from "../services/task.repository";
import Task from "../entities/Task.entity";


const props = defineProps<{
  taskRepository: TaskRepository
}>()

const tasks = ref<Task[]>([])
const createTaskBtn = ref<HTMLLabelElement>(null!)

const loadTasks = async () => {
  tasks.value = await props.taskRepository.getTasks();
}

const submitTask = async (task: Task) => {
  console.log(task)
  createTaskBtn.value.click()
}

/**
 * onCreated
 */
loadTasks()

</script>

<template>
  <div class="w-full p-8">
    <div class="mb-8">
      <label for="my-modal" class="btn btn-primary mr-4 modal-button" ref="createTaskBtn">Crear Tarea</label>
    </div>

    <div class="flex">
      <task-item :task="task" v-for="(task, index) in tasks" :key="index"/>
    </div>
  </div>
  <FormModal id="my-modal" @onSubmit="submitTask"></FormModal>
</template>
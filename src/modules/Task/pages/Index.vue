<script setup lang="ts">
import {ref} from "vue";
import TaskItem from "../components/TaskItem.vue"
import TaskEntity from "../entities/Task.entity";
import {TaskRepository} from "../services/task.repository";


const props = defineProps<{
  taskRepository: TaskRepository
}>()

const tasks = ref<TaskEntity[]>([])

const loadTasks = async () => {
  tasks.value = await props.taskRepository.getTasks();
}

/**
 * onCreated
 */
loadTasks()

</script>

<template>
  <div class="w-full p-8">
    <div class="mb-8">
      <button class="btn btn-primary mr-4">Crear Tarea</button>
    </div>

    <div class="flex">
      <task-item :task="task" v-for="(task, index) in tasks" :key="index"/>
    </div>
  </div>
</template>
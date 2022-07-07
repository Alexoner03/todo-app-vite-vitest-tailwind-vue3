<script setup lang="ts">
import ActionButton from "@/modules/Shared/components/ActionButton.vue"
import TaskItem from "../components/TaskItem.vue"
import TaskEntity from "../entities/Task.entity";
import {ref} from "vue";
import {TaskRepository} from "@/modules/Task/services/task.repository";


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
  <div class="w-full">
    <div class="mb-4">
      <action-button class="mr-4">Crear Tarea</action-button>
    </div>

    <div class="flex">
      <task-item :task="task" v-for="(task, index) in tasks" :key="index"></task-item>
    </div>
  </div>
</template>
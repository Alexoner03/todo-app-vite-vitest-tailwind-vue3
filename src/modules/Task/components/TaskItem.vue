<script setup lang="ts">
import Task from "../entities/Task.entity";

interface TaskItemProps {
  task : Task
}

defineProps<TaskItemProps>()

</script>

<template>
  <div class="task-style">
    <span>{{ task.name }}</span>
    <span>{{ task.date.toDateString() }}</span>
    <span>{{ task.state }}</span>
    <span>{{ task.importance }}</span>
  </div>
</template>
<style scoped>
.task-style {
  @apply bg-white bg-opacity-50 w-60 h-60 rounded flex justify-center items-center flex-col
}
</style>
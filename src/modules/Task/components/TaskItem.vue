<script setup lang="ts">
import Task from "../entities/Task.entity";

interface TaskItemProps {
  task : Task
}

interface TaskItemEmits {
  (e: 'onClose', task: Task): void,
  (e: 'onActive', task: Task): void,
  (e: 'onDeleted', task: Task): void,
}

const props = defineProps<TaskItemProps>()
const emit = defineEmits<TaskItemEmits>()

const onClose = () => emit('onClose', props.task);
const onActive = () => emit('onActive', props.task);
const onDeleted = () => emit('onDeleted', props.task);

</script>

<template>
  <div class="task-style">
    <span class="task-name">{{ task.name }}</span>
    <span>{{ task.date.toDateString() }}</span>
    <span>{{ task.state }}</span>
    <span>{{ task.importance }}</span>
    <div class="text-sm buttons mt-4">
      <button @click="onClose">
        Terminar
      </button>
      |
      <button @click="onActive">
        Activar
      </button>
      |
      <button @click="onDeleted">
        Eliminar
      </button>
    </div>
  </div>
</template>
<style scoped>
.task-style {
  @apply bg-white bg-opacity-50 w-64 h-64 rounded flex justify-center items-center flex-col
}

.task-name {
  @apply font-black text-2xl underline mb-2
}

.buttons button {
  @apply bg-white rounded px-1 hover:bg-opacity-50
}
</style>
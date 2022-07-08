<script setup lang="ts">
import Task from "../entities/Task.entity";
import {State} from "../entities/enums.d"

interface TaskItemProps {
  task: Task
}

interface TaskItemEmits {
  (e: 'onToggle', task: Task): void,

  (e: 'onDeleted', task: Task): void,
}

const props = defineProps<TaskItemProps>()
const emit = defineEmits<TaskItemEmits>()

const onToggle = () => emit('onToggle', props.task);
const onDeleted = () => emit('onDeleted', props.task);

</script>

<template>
  <div class="card w-96 bg-primary shadow-xl">
    <figure>
      <span class="text-4xl py-4 font-black">{{ task.title }}</span>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ task.date.toDateString() }}</h2>
      <p>{{ task.description }}</p>
      <p>Importancia: <span class="float-right">{{ task.importance }}</span></p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-sm btn-secondary" @click="onToggle">
          {{ task.state === State.ACTIVE ? 'Terminar' : 'Empezar' }}
        </button>
        <button class="btn btn-sm btn-secondary" @click="onDeleted">Eliminar</button>
      </div>
    </div>
  </div>
</template>

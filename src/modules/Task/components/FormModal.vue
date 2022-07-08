<script setup lang="ts">
import {Importance, State} from "@/modules/Task/entities/enums.d";
import {reactive} from "vue";
import Task from "@/modules/Task/entities/Task.entity";

const props = defineProps<{
  id: string
}>()

const emit = defineEmits<{
  (e: 'onSubmit', task: Task): void
}>()

const form = reactive<Task>({
  state: State.ACTIVE,
  description: "",
  title: "",
  date: new Date(),
  importance: Importance.LOW
})

const onSubmit = () => emit('onSubmit', form)
</script>

<template>
  <input type="checkbox" :id="props.id" class="modal-toggle"/>
  <div class="modal">
    <form class="modal-box" @submit.prevent="onSubmit">
      <h3 class="font-bold text-lg">Crear Tarea</h3>
      <div class="form-control w-full mb-4">
        <label class="label" for="form-title">
          <span class="label-text">Titulo</span>
        </label>
        <input v-model="form.title" type="text" id="form-title" placeholder="Escribe un titulo"
               class="input input-bordered w-full"/>
      </div>
      <div class="form-control w-full mb-4">
        <label class="label" for="form-description">
          <span class="label-text">Descripción</span>
        </label>
        <textarea v-model="form.description" id="form-description" class="textarea textarea-bordered resize-none"
                  placeholder="Descripción"></textarea>
        <span class="label-text-alt">Max. 20 palabras</span>
      </div>
      <div class="form-control w-full mb-4">
        <label class="label" for="form-importance">
          <span class="label-text">Importancia</span>
        </label>
        <select v-model="form.importance" id="form-importance" class="select select-bordered w-full">
          <option v-for="importanceItem in Importance">{{ importanceItem }}</option>
        </select>
      </div>
      <div class="modal-action">
        <label for="my-modal" class="btn">Cerrar</label>
        <button class="btn btn-primary" type="submit">Crear</button>
      </div>
    </form>
  </div>
</template>
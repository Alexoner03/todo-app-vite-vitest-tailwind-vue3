<script setup lang="ts">
interface ButtonProps {
  className?: string
}

defineProps<ButtonProps>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => emit('click')

</script>

<template>
  <button :class="[className ?? 'btn btn-primary']" @click="onClick">
    <slot></slot>
  </button>
</template>
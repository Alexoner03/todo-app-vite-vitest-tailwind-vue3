<script setup lang="ts">
interface ButtonProps {
  className?: string
}

defineProps<ButtonProps>()

</script>

<template>
  <button :class="[className ?? 'button-style']">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-style {
  @apply bg-white p-2 rounded hover:bg-opacity-75 transition-all duration-75
}
</style>
<script setup>
import Sidebar from "../components/sidebar.vue"
</script>

<template>
  <div class="w-full h-screen relative">
    <div class="wrapper-style">
      <!--sidebar-->
      <div class="w-3/12">
        <sidebar></sidebar>
      </div>

      <!--content-->
      <main class="w-9/12 p-8">
        <slot></slot>
      </main>
    </div>

    <!--footer-->
    <footer class="footer-style">
      Desarrollado por Alexander Ortiz | <a class="underline" href="https://aortiz.netlify.com">Ver portafolio</a>
    </footer>
  </div>
</template>

<style scoped>
.footer-style {
  @apply text-center text-white py-4 bottom-0 absolute w-full bg-black bg-opacity-20
}

.wrapper-style {
  @apply flex w-full h-full overflow-y-auto bg-gradient-to-bl from-indigo-700 to-purple-900
}
</style>
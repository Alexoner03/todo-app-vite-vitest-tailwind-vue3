<script setup>
import Sidebar from "../components/Sidebar.vue"
import Navbar from "../components/Navbar.vue"
</script>

<template>
  <div class="w-full h-screen relative">

    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <navbar/>
        <!-- Page content here -->
        <slot></slot>
      </div>
      <!--sidebar-->
      <sidebar/>
    </div>

    <!--footer-->
    <footer class="footer-style">
      Desarrollado por Alexander Ortiz | <a class="underline" href="https://aortiz.netlify.com">Ver portafolio</a>
    </footer>
  </div>
</template>

<style scoped>
.footer-style {
  @apply text-center text-white py-4 bottom-0 absolute w-full bg-neutral bg-opacity-20
}
</style>
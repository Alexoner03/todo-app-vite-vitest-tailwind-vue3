<template>
  <nav class="h-full border-r-2 border-white">
    <div class="info-style">
        TaskEntity APP
    </div>
    <ul class="sidebar">
      <li>Tareas</li>
      <li>Grupos</li>
      <li>Pomodoro</li>
    </ul>
  </nav>
</template>

<style>
.sidebar {
  @apply flex flex-col items-center px-2
}
.sidebar li {
  @apply m-2 py-2 bg-white w-full text-center rounded
  hover:bg-indigo-400 transition-all ease-in duration-75 cursor-default
}
.info-style {
  @apply text-2xl text-center text-white py-8 font-black animate-bounce duration-75
}
</style>
<template>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <li class="">
        <span>Utility APP</span>
      </li>
      <hr class="mb-4"/>
      <li class="mb-4">
        <router-link to="/tasks"><span class="btn btn-block">Tareas</span></router-link>
      </li>
      <li class="mb-4">
        <router-link to="/tasks"><span class="btn btn-block">Pomodoro</span></router-link>
      </li>

    </ul>
  </div>
</template>
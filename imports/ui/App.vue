<script setup>
import AppMenu from './AppMenu.vue'
import { subscribe } from 'vue-meteor-tracker'

subscribe('todos')

</script>

<template>
  <div class="p-8">
    <AppMenu />
    <router-view />
  </div>
</template>

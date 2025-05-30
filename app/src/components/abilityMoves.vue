<template>
  <div>
    <div class="card" v-for="boss in bossMoves" :key="boss">
      <h3>{{ boss.name }}</h3>
      <p>Skills: {{ boss.skills }}</p>
    </div>
  </div>
</template>

<script setup>
import bossMoves from './bosses.json'
</script>

<style scoped></style>

<template>
  <div>
    <div class="card" :class="elementClass">
      <h3>{{ ability.name }}</h3>
      <p>Element: {{ ability.element }}</p>
      <p>Power: {{ ability.power }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

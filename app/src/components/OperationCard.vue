<template>
    <div class="card" :class="elementClass">
      <h3>{{ operation.name }}</h3>
      <p>Element: {{ operation.element }}</p>
      <p>Effect: {{ operation.operation }}</p>
      <p>Uses Left: {{ operation.numberRemaining }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  const props = defineProps<{
  operation: {
    name: string;
    element: string;
    operation: string;
    numberRemaining: number;
    selected: boolean;
  };
}>();
const elementClass = computed(() => `element-${props.operation.element.toLowerCase()}`);
  </script>
  
  <style scoped>
  .card {
    border: 2px solid #ccc;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 10px;
    width: 200px;
    background-color: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  }
  .element-fire {
  background-color: #ffdddd;
  border-color: #ff6b6b;
}

.element-ice {
  background-color: #ddf3ff;
  border-color: #6bc5ff;
}

.element-earth {
  background-color: #f0e6d2;
  border-color: #bfa76f;
}

.element-electricity {
  background-color: #fef6d8;
  border-color: #ffd700;
}

.element-air,
.element-wind {
  background-color: #e3f8ff;
  border-color: #a4d4ff;
}

.element-water {
  background-color: #d0f0ff;
  border-color: #00bfff;
}

.element-darkness {
  background-color: #2e2e2e;
  color: white;
  border-color: #555;
}

.element-light {
  background-color: #ffffe0;
  border-color: #fffacd;
}

  </style>
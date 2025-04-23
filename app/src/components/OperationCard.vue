<template>
    <div class="card">
      <h3>{{ operation.name }}</h3>
      <p><strong>Element:</strong> {{ operation.element }}</p>
      <p><strong>Effect:</strong> {{ operation.operation }}</p>
      <p><small>Uses Left: {{ operation.numberRemaining }}</small></p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    operation: {
      name: string;
      element: string;
      operation: string;
      numberRemaining: number;
      selected: boolean;
    };
  }>();
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
  </style>
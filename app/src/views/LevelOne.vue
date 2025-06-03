<template>
  <div>
    <img src="/public/WhalenMichael.jpg"  width="500" height="500">
    </img>
    <img src="/public/WhalenMouthBig.png"  width="500" height="500">
  </img>
  </div>
  <div>
    <p>number</p>
  </div>
  <div class="mt-8 p-4 border-2 border-gray-300 rounded-lg max-w-2xl mx-auto bg-gray-100 text-center">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Selected Operations</h2>
      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="operation in inventory.selectedOperationList"
          :key="operation"
          class="bg-blue-600 text-white px-4 py-2 rounded-md font-bold shadow"
        >
          {{ operation }}
        </div>
      </div>
    </div>
  <div>

  </div>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory'
const inventory = useInventoryStore()
</script>

<style scoped></style>

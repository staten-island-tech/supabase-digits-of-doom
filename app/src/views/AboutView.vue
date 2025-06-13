<template>
  <main class="p-4 flex flex-col items-center justify-center">
    <div class="flex flex-wrap gap-4 justify-center mb-10">
      <OperationCard
        v-for="operation in operationStore.operations"
        :key="operation.name"
        :operation="operation"
        @click="currentInventory.addOperation(operation)"
      />
    </div>

    <div class="w-full max-w-xl p-6 border-2 border-gray-300 rounded-lg bg-gray-100 text-center">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Selected Operations</h2>
      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="operation in operationsList"
          :key="operation.name"
          class="bg-blue-600 text-white px-4 py-2 rounded-md font-bold shadow"
        >
          {{ operation.name }}
        </div>
      </div>
    </div>

    <button
      class="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow"
      @click="$router.push('/HS')"
    >
      Back
    </button>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import OperationCard from '@/components/OperationCard.vue'
import { useInventoryStore } from '@/stores/currentInv'
import { useOperationsListStore } from '@/stores/inventory'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const currentInventory = useInventoryStore()
const operationsList = computed(() => currentInventory.selectedOperationList)
const operationStore = useOperationsListStore()

onMounted(() => {
  operationStore.fetchOperations()
})
</script>

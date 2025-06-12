<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="text-center mb-6">
      <img
        v-if="game.playerTurn"
        src="/public/WhalenMichael.jpg"
        width="500"
        height="500"
        alt="Player Turn"
        class="mx-auto"
      />
      <img
        v-else
        src="/public/WhalenMouthBig.png"
        width="500"
        height="500"
        alt="Boss Turn"
        class="mx-auto"
      />
    </div>
    <div class="text-center my-6">
      <p class="text-2xl font-bold">Current Value: {{ game.x }}</p>
      <p class="text-lg text-gray-600">Target: 1000</p>
      <p class="text-md text-green-700">Score: {{ game.score }}</p>
    </div>

    <div class="text-center my-2 text-sm text-gray-500">
      <p v-if="game.playerTurn">Your Turn</p>
      <p v-else>Boss is thinking...</p>
    </div>

    <div class="mt-8 p-4 border-2 border-gray-300 rounded-lg bg-gray-100 text-center w-full max-w-2xl">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Selected Operations</h2>
      <div class="flex flex-wrap justify-center gap-3">
        <button
          v-for="operationName in inventory.selectedOperationList"
          :key="operationName"
          class="bg-blue-600 text-white px-4 py-2 rounded-md font-bold shadow hover:bg-blue-700 transition disabled:opacity-50"
          :disabled="!game.playerTurn"
          @click="logOperation(operationName)"
        >
          {{ operationName }} ({{ getOperationSymbol(operationName) }})
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/stores/inventory'
import { useGameStore } from '@/stores/gameStore';
import { onMounted } from 'vue'
import { operationsList } from '@/stores/operationlist'

const game = useGameStore();
const inventory = useInventoryStore()

function getOperationSymbol(name: string): string {
  const op = operationsList.find(o => o.name === name);
  return op?.operation ?? '?';
}

onMounted(() => {
  const selectedNames = inventory.selectedOperationList;

  const playerInventory = selectedNames
    .map(name => operationsList.find(op => op.name === name)?.operation)
    .filter((op): op is string => typeof op === 'string');

  const bossList1 = [
    {
      name: 'Boss Level 1',
      skills: ['-50', '*2', '/2'],
    }
  ];

  game.initializeGame(500, playerInventory, bossList1);
});


function logOperation(name: string) {
  const op = operationsList.find(o => o.name === name);
  if (!op) {
    console.error(`Operation not found for name: ${name}`);
    return;
  }

  game.performOperation(op.operation);
}

</script>

<style scoped></style>

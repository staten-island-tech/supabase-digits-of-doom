<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen"
    style="background-image: url('/whalenfield.avif'); background-size: cover; overflow: hidden"
  >
    <div v-if="!isGameOver">
      <div class="text-center mb-6 w-full flex justify-center">
        <img
          v-if="game.playerTurn"
          src="/WhalenMichael.jpg"
          width="500"
          height="500"
          alt="Player Turn"
          class="mx-auto"
        />
        <img
          v-else
          src="/Football_whalen.png"
          width="500"
          height="500"
          alt="Boss Turn"
          class="mx-auto"
        />
      </div>

      <div class="text-center my-6 bg-white p-4 rounded-lg shadow-md">
        <p class="text-2xl font-bold">Current Value: {{ game.x }}</p>
        <p class="text-lg text-gray-600">Target: 1000</p>
        <p class="text-md text-green-700">Score: {{ game.score }}</p>
        <p class="text-sm text-gray-500">Round: {{ game.round }} / {{ game.maxRounds }}</p>
      </div>

      <div class="text-center my-2 text-sm text-gray-500">
        <p v-if="game.playerTurn">Your Turn</p>
        <p v-else>Boss is thinking...</p>
      </div>

      <div
        class="mt-8 p-4 border-2 border-gray-300 rounded-lg bg-gray-100 text-center w-full max-w-2xl"
      >
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Selected Operations</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="op in selectedOperations"
            :key="op.name"
            class="bg-blue-600 text-white px-4 py-2 rounded-md font-bold shadow hover:bg-blue-700 transition disabled:opacity-50"
            :disabled="!game.playerTurn || isGameOver"
            @click="logOperation(op.operation)"
          >
            {{ op.name }} ({{ op.operation }})
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center bg-white p-8 rounded-lg shadow-xl">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Game Over</h1>
      <p class="text-2xl text-gray-800 mb-2">Final Score: {{ game.score }}</p>
      <p class="text-lg text-gray-600 mb-6">Thanks for playing!</p>

      <div v-if="newOperationsAwarded.length > 0" class="mb-6 p-4 bg-green-100 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">New Operations Unlocked!</h2>
        <div class="flex flex-wrap justify-center gap-2">
          <div
            v-for="op in newOperationsAwarded"
            :key="op.name"
            class="bg-green-200 px-3 py-1 rounded-md"
          >
            {{ op.name }} ({{ op.operation }})
          </div>
        </div>
      </div>

      <button class="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800" @click="goBack">
        Back to Level Select
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useInventoryStore } from '@/stores/currentInv'
import { useGameStore } from '@/stores/gameStore'
import { useAuthStore } from '@/stores/authStore'
import { supabase } from '@/supabase'

interface GameOperation {
  name: string
  element: string
  operation: string
}

const game = useGameStore()
const inventory = useInventoryStore()
const auth = useAuthStore()
const router = useRouter()

const selectedOperations = computed(() => inventory.selectedOperationList)
const isGameOver = computed(() => game.round > game.maxRounds)

const hasPushedScore = ref(false)
const newOperationsAwarded = ref<GameOperation[]>([])

const operationsToAward: GameOperation[] = [
  {
    name: 'Magnetic Reverser',
    element: 'magnet',
    operation: '*-0.5',
  },
  {
    name: 'Crystal Splitter',
    element: 'crystal',
    operation: '/3',
  },
  {
    name: 'Plasma Heater',
    element: 'plasma',
    operation: '+30',
  },
]

onMounted(() => {
  const playerInventory = selectedOperations.value.map((op) => op.operation)
  const bossList1 = [
    {
      name: 'Football Whalen',
      skills: ['-10', '*-1.5', '/2'],
    },
  ]
  game.initializeGame(500, playerInventory, bossList1)
})

watch(isGameOver, async (value) => {
  if (value && !hasPushedScore.value && auth.id) {
    hasPushedScore.value = true

    const operationsToAdd = operationsToAward.filter(
      (newOp) =>
        !selectedOperations.value.some((existingOp) => existingOp.operation === newOp.operation),
    )

    if (operationsToAdd.length > 0) {
      newOperationsAwarded.value = operationsToAdd
      await updateSupabaseInventory(operationsToAdd)
      await inventory.fetchInventory()
    }

    if (auth.id) {
      const { data: currentData, error: fetchError } = await supabase
        .from('users')
        .select('high_score')
        .eq('id', auth.id)
        .single()

      if (!fetchError && currentData) {
        const currentStage = 1
        const currentHighScores =
          Array.isArray(currentData.high_score) && currentData.high_score.length === 3
            ? currentData.high_score
            : [0, 0, 0]

        if (currentStage >= 0 && currentStage <= 2) {
          const roundedScore = Math.round(game.score)

          if (roundedScore > currentHighScores[currentStage]) {
            const newHighScores = [...currentHighScores]
            newHighScores[currentStage] = roundedScore

            await supabase.from('users').update({ high_score: newHighScores }).eq('id', auth.id)
          }
        }
      }
    }
  }
})

async function updateSupabaseInventory(newOperations: GameOperation[]): Promise<void> {
  if (!auth.id) return

  const { data: currentData, error } = await supabase
    .from('users')
    .select('inventory')
    .eq('id', auth.id)
    .single()

  if (!error && currentData) {
    const currentInventory = currentData.inventory || []
    const updatedInventory = [...currentInventory, ...newOperations]

    await supabase.from('users').update({ inventory: updatedInventory }).eq('id', auth.id)
  }
}

function logOperation(operation: string) {
  game.performOperation(operation)
}

function goBack() {
  router.push('/LSelect')
}
</script>

<style scoped></style>

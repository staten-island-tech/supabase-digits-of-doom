<template>
  <main>
    <div class="cards-container">
      <OperationCard
        v-for="operation in operationsList"
        :key="operation.name"
        :operation="operation"
        @select="selectOperation(operation.name)"
      />
    </div>
    <abilityMoves />
  </main>
</template>

<script setup lang="ts">
import OperationCard from '@/components/OperationCard.vue'
import abilityMoves from '@/components/abilityMoves.vue'

/* let turnNumber = 0
let turnLimit = 5

function endStage() {
  console.log('Calculating..')
}

function enemyMove() {
  console.log('Enemy move')
}

function moveSelection() {
  console.log('Select your Operation.')
  for (let i = 0; i < operationsList.length; i++) {
    if (operationsList[i].selected === true) {
      return operationsList[i].operation
    }
  }
}

function startStage() {
  turnNumber = 0
  console.log('Stage started')
  if (turnNumber <= turnLimit) {
    moveSelection()
    enemyMove()
    turnNumber++
  } else {
    console.log('Stage ended')
    endStage()
  }
} */
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>

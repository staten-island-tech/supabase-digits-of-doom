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
  </main>
</template>

<script setup lang="ts">
import OperationCard from '@/components/OperationCard.vue'
import { ref } from 'vue';

const selectedOperationName = ref<string | null>(null);
let selectedOperationList: string[] = [];

function selectOperation(name: string) {
  selectedOperationName.value = name;
  operationsList.forEach(op => {
    op.selected = (op.name === name);
  });
  if (selectedOperationList.includes(name)) {
    alert("Operation has already selected. Please select a different operation.");
    return;
  }
  console.log(selectedOperationName.value);
  if (selectedOperationList.length <3) {
    selectedOperationList.push(name);
    console.log(selectedOperationList)
  } else if (selectedOperationList.length >= 3) {
    selectedOperationList.shift();
    selectedOperationList.push(name);
    console.log(selectedOperationList)
  }
}
const operationsList = [
    {
        name: 'Freezing Divider',
        element: 'ice',
        operation: 'divide',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Flaming Multiplier',
        element: 'fire',
        operation: 'multiply',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Earthquake Adder',
        element: 'earth',
        operation: 'add',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Thunder Striker Subtractor',
        element: 'electricity',
        operation: 'subtract',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Blizzarding Doubler',
        element: 'ice',
        operation: 'doubler',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Glacial Tripler',
        element: 'ice',
        operation: 'tripler',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Shadow Inverter',
        element: 'darkness',
        operation: 'invert', // Inverts the number (e.g., -x)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Light Amplifier',
        element: 'light',
        operation: 'amplify', // Increases the number by a factor (e.g., x * 1.5)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Gravity Puller',
        element: 'gravity',
        operation: 'pull', // Reduces the number towards zero (like floor function)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Magnetic Reverser',
        element: 'magnet',
        operation: 'reverse', // Reverses the sign of the number (e.g., -x -> x)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Crystal Splitter',
        element: 'crystal',
        operation: 'split', // Splits the number into equal parts (e.g., 6 -> 3, 3)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Poison Decayer',
        element: 'poison',
        operation: 'decay', // Slowly reduces the number over time (e.g., x -> x - 1 per turn)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Time Freezer',
        element: 'time',
        operation: 'freeze', // Freezes the current value for a set number of turns
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Vortex Twister',
        element: 'vortex',
        operation: 'twist', // Randomizes the number within a given range
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Solar Reflector',
        element: 'solar',
        operation: 'reflect', // Mirrors the value based on certain criteria (e.g., positive -> negative)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Lunar Reshaper',
        element: 'moon',
        operation: 'reshape', // Alters the number based on a pattern or formula
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Nebula Distorter',
        element: 'nebula',
        operation: 'distort', // Changes the number unpredictably, creating chaos
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Magnet Puller',
        element: 'magnet',
        operation: 'pull', // Pulls a value towards a target number
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Tornado Swapper',
        element: 'wind',
        operation: 'swap', // Swaps the values between two numbers
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Plasma Heater',
        element: 'plasma',
        operation: 'heat', // Increases the number exponentially (e.g., x * x)
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Tidal Push',
        element: 'water',
        operation: 'push', // Pushes the number in a specific direction (e.g., increase or decrease)
        selected: false,
        numberRemaining: 0,
    }
];

let turnNumber = 0;
let turnLimit=5;

function endStage() {
  console.log("Calculating..")
}

function enemyMove() {
  console.log("Enemy move");
}


function moveSelection() {
  console.log("Select your Operation.");
  for (let i = 0; i < operationsList.length; i++) {
    if (operationsList[i].selected === true) {
      return operationsList[i].operation;
    }
  }
}

function startStage() {
  turnNumber = 0;
  console.log("Stage started");
  if (turnNumber <= turnLimit) {
    moveSelection();
    enemyMove();
    turnNumber++;
  } else {
    console.log("Stage ended");
    endStage();
  }
}
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
<template>
  <main class="p-4">
    <div class="flex flex-wrap gap-4 justify-center">
      <OperationCard
        v-for="operation in operationsList"
        :key="operation.name"
        :operation="operation"
        @select="selectOperation(operation.name)"
      />
    </div>

    <div class="mt-8 p-4 border-2 border-gray-300 rounded-lg max-w-2xl mx-auto bg-gray-100 text-center">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Selected Operations</h2>
      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="operation in selectedOperationList"
          :key="operation"
          class="bg-blue-600 text-white px-4 py-2 rounded-md font-bold shadow">
          {{ operation }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import OperationCard from '@/components/OperationCard.vue'
import { ref } from 'vue';
const selectedOperationName = ref<string | null>(null);
  const selectedOperationList = ref<string[]>([]);

function selectOperation(name: string) {
  selectedOperationName.value = name;
  operationsList.forEach(op => {
    op.selected = (op.name === name);
  });

  if (selectedOperationList.value.includes(name)) {
    alert("Operation has already selected. Please select a different operation.");
    return;
  }
  console.log(selectedOperationName.value);
  if (selectedOperationList.value.length <3) {
    selectedOperationList.value.push(name);
    console.log(selectedOperationList)
  } else if (selectedOperationList.value.length >= 3) {
    selectedOperationList.value.shift();
    selectedOperationList.value.push(name);
    console.log(selectedOperationList)
  }
}

let operationsList = [{
    "name": "Freezing Divider",
    "element": "ice",
    "operation": "divide",
    "selected": false
  },
  {
    "name": "Flaming Multiplier",
    "element": "fire",
    "operation": "multiply",
    "selected": false
  },
  {
    "name": "Earthquake Adder",
    "element": "earth",
    "operation": "add",
    "selected": false
  },
  {
    "name": "Thunder Striker Subtractor",
    "element": "electricity",
    "operation": "subtract",
    "selected": false
  },
  {
    "name": "Blizzarding Doubler",
    "element": "ice",
    "operation": "doubler",
    "selected": false
  },
  {
    "name": "Glacial Tripler",
    "element": "ice",
    "operation": "tripler",
    "selected": false
  },
  {
    "name": "Shadow Inverter",
    "element": "darkness",
    "operation": "invert", 
    "selected": false
  },
  {
    "name": "Light Amplifier",
    "element": "light",
    "operation": "amplify", 
    "selected": false
  },
  {
    "name": "Gravity Puller",
    "element": "gravity",
    "operation": "pull",
    "selected": false
  },
  {
    "name": "Magnetic Reverser",
    "element": "magnet",
    "operation": "reverse",
    "selected": false
  },
  {
    "name": "Crystal Splitter",
    "element": "crystal",
    "operation": "split",
    "selected": false
  },
  {
    "name": "Poison Decayer",
    "element": "poison",
    "operation": "decay", 
    "selected": false
  },
  {
    "name": "Time Freezer",
    "element": "time",
    "operation": "freeze",
    "selected": false
  },
  {
    "name": "Vortex Twister",
    "element": "vortex",
    "operation": "twist",
    "selected": false
  },
  {
    "name": "Solar Reflector",
    "element": "solar",
    "operation": "reflect",
    "selected": false
  },
  {
    "name": "Lunar Reshaper",
    "element": "moon",
    "operation": "reshape",
    "selected": false
  },
  {
    "name": "Nebula Distorter",
    "element": "nebula",
    "operation": "distort",
    "selected": false
  },
  {
    "name": "Magnet Puller",
    "element": "magnet",
    "operation": "pull",
    "selected": false
  },
  {
    "name": "Tornado Swapper",
    "element": "wind",
    "operation": "swap",
    "selected": false
  },
  {
    "name": "Plasma Heater",
    "element": "plasma",
    "operation": "heat",
    "selected": false
  },
  {
    "name": "Tidal Push",
    "element": "water",
    "operation": "push", 
    "selected": false
  }]
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

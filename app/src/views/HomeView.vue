<template>
   <div><HomeInstruction></HomeInstruction></div>
</template>


<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HomeInstruction from '@/components/HomeInstruction.vue'
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
        name: 'Wind Gust Doubler',
        element: 'air',
        operation: 'doubler',
        selected: false,
        numberRemaining: 0,
    },
    {
        name: 'Water Surge Tripler',
        element: 'water',
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

let number = 1;
let multiplacationdmg = 2;
let divisiondmg = 0;
let additiondmg = 5;
let subtractiondmg = 15.5;


function ice() {

}

function add(){
number += additiondmg;
console.log(number);
}

function subtract() {
number -= subtractiondmg;
console.log(number);
}
function multiply() {
number = number * multiplacationdmg;
console.log(number);
}
function division() {
    number = number / multiplacationdmg;
    console.log(number);
    }
function distort() {
  number = number * (Math.random() * 3);
  console.log(number);
  }
function invert() {
  number = -number;
  console.log(number);
}
function  freezingDivide() {
  division()
  console.log(number);
}

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

<style scoped></style>

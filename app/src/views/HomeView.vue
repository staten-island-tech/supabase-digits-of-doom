<template>
  <div
    class="h-screen bg-no-repeat bg-center"
    style="background-image: url('/treesky.jpg'); background-size: cover; overflow: hidden"
  >
    <HomeInstruction />
  </div>
</template>

<script setup lang="ts">
import HomeInstruction from '@/components/SignUp.vue'

let number = 1
let multiplacationdmg = 2
let divisiondmg = 0
let additiondmg = 5
let subtractiondmg = 15.5

function ice() {}

function add() {
  number += additiondmg
  console.log(number)
}

function subtract() {
  number -= subtractiondmg
  console.log(number)
}
function multiply() {
  number = number * multiplacationdmg
  console.log(number)
}
function division() {
  number = number / multiplacationdmg
  console.log(number)
}
function distort() {
  number = number * (Math.random() * 3)
  console.log(number)
}
function invert() {
  number = -number
  console.log(number)
}
function freezingDivide() {
  division()
  console.log(number)
}
</script>

<style scoped></style>

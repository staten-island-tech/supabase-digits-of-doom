<template>
  <div
    class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-pink-400"
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <image href="/public/subtraction.png" x="-10vw" y="25" width="50" height="50">
        <animate
          attributeName="x"
          from="-10vw"
          to="110vw"
          dur="7s"
          begin=".3s"
          repeatCount="indefinite"
        />
      </image>
    </svg>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <image href="/public/plus.png" x="-10vw" y="25" width="50" height="50">
        <animate
          attributeName="x"
          from="-10vw"
          to="110vw"
          dur="5s"
          begin=".3s"
          repeatCount="indefinite"
        />
      </image>
    </svg>
    <h1 class="text-6xl text-white">Digits of Doom</h1>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <image href="/public/division.png" x="-10vw" y="25" width="50" height="50">
        <animate
          attributeName="x"
          from="-10vw"
          to="110vw"
          dur="6s"
          begin=".3s"
          repeatCount="indefinite"
        />
      </image>
    </svg>

    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <image href="/public/percent.png" x="-10vw" width="50" height="50">
        <animate
          attributeName="x"
          from="-10vw"
          to="110vw"
          dur="8s"
          begin=".3s"
          repeatCount="indefinite"
        />
      </image>
    </svg>
    <div class="flex justify-center mt-12">
      <router-link :to="{ path: '/LSelect' }"
        ><button class="px-4 py-2 bg-white rounded-lg shadow-lg text-black">
          Levels
        </button></router-link
      >
      <router-link :to="{ path: '/inventory' }"
        ><button class="px-4 py-2 bg-white rounded-lg shadow-lg text-black">
          Inventory
        </button></router-link
      >
    </div>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <image href="/public/multiplacation.png" x="-10vw" y="25" width="50" height="50">
        <animate
          attributeName="x"
          from="-10vw"
          to="110vw"
          dur="4s"
          begin=".3s"
          repeatCount="indefinite"
        />
      </image>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

function startGame() {
  alert('Starting the game...')
}
</script>

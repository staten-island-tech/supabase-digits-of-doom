<template>
  <div class="home-screen">
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
    <h1 class="title">Digits of Doom</h1>
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
    <div class="menu">
      <router-link :to="{ path: '/level1' }"><button>Login</button></router-link>
      <button @click="">Settings</button>
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
  alert('Starting the game...') // You can route to the game screen here
}
</script>

<style scoped>
.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.title {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.menu button {
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ffffff22;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.menu button:hover {
  background-color: #ffffff44;
}

.options {
  margin-top: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 10px;
}
</style>

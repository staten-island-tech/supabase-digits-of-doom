/************* ✨ Windsurf Command ⭐ *************/
<template>
  <div class="level-select">
    <router-link :to="{ path: '/level1' }">
      <button class="level-button">Level 1</button>
    </router-link>
    <router-link :to="{ path: '/level2' }">
      <button class="level-button">Level 2</button>
    </router-link>
    <router-link :to="{ path: '/level3' }">
      <button class="level-button">Level 3</button>
    </router-link>
    <router-link :to="{ path: '/HS' }">
      <button class="level-button">Home</button>
    </router-link>
  </div>
</template>

<style scoped>
.level-select {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.level-button {
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: #4caf50;
  color: white;
}

.level-button:hover {
  background-color: #45a049;
}
</style>
/******* 6e653063-5d1f-4afe-9e11-2a4a7a6f6a3e *******/

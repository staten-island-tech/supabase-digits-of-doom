<!-- LevelMenu.vue -->
<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-20">
    <router-link :to="{ name: 'level1' }">
      <button
        class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
      >
        Level 1
      </button>
    </router-link>
    <router-link :to="{ name: '' }">
      <button
        class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
      >
        Level 2
      </button>
    </router-link>
    <router-link :to="{ name: '' }">
      <button
        class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
      >
        Level 3
      </button>
    </router-link>
    <router-link :to="{ name: 'HS' }">
      <button
        class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
      >
        Back
      </button>
    </router-link>
  </div>
</template>

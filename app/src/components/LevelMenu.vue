<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col justify-between items-center h-[50%]">
      <button
        class="w-80 bg-gradient-to-r from-pink-300 to-pink-700 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
        @click="$router.push({ name: 'level1' })"
      >
        Level 1
      </button>
      <button
        class="w-80 bg-gradient-to-r from-pink-300 to-pink-700 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
        @click="$router.push({ name: '' })"
      >
        Level 2
      </button>
      <button
        class="w-80 bg-gradient-to-r from-pink-300 to-pink-700 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
        @click="$router.push({ name: '' })"
      >
        Level 3
      </button>
      <button
        class="w-80 bg-gradient-to-r from-pink-300 to-pink-700 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-3xl"
        @click="$router.push({ name: 'HS' })"
      >
        Back
      </button>
    </div>
  </div>
</template>

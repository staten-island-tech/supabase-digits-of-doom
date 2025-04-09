<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]">
    <!-- Form Container -->
    <div
      class="bg-white p-[1.5rem] sm:p-[2rem] rounded-lg shadow-lg max-w-[90%] sm:max-w-[30rem] w-full space-y-[1rem] sm:space-y-[1.5rem]"
    >
      <!-- Heading -->
      <h1 class="text-[1.5rem] sm:text-[1.875rem] font-bold text-center text-gray-800">Login</h1>

      <!-- Email Input -->
      <div class="space-y-[0.75rem] sm:space-y-[1rem]">
        <label for="email" class="block text-[0.8rem] sm:text-[0.875rem] font-medium text-gray-700">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          class="w-full px-[1rem] sm:px-[1.25rem] py-[0.6rem] sm:py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <!-- Password Input -->
      <div class="space-y-[0.75rem] sm:space-y-[1rem] mb-[1.5rem] sm:mb-[2rem]">
        <label for="psw" class="block text-[0.8rem] sm:text-[0.875rem] font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          class="w-full px-[1rem] sm:px-[1.25rem] py-[0.6rem] sm:py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full h-[2.75rem] sm:h-[3rem] text-[1rem] sm:text-[1.125rem] font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:ring-[0.125rem] focus:ring-green-500"
      >
        Login
      </button>

      <!-- Sign Up Button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="w-[80%] h-[2.2rem] sm:h-[2.4rem] text-[0.9rem] sm:text-[1.125rem] font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:ring-[0.125rem] focus:ring-red-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
* {
  margin: 0.5rem;
}
</style>

<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]">
    <!-- Form Container -->
    <div class="bg-white p-[2rem] rounded-lg shadow-lg max-w-[30rem] w-full space-y-[1.5rem]">
      <h1 class="text-[1.875rem] font-bold text-center text-gray-800">Login</h1>

      <div class="space-y-[1rem]">
        <label for="email" class="block text-[0.875rem] font-medium text-gray-700">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          class="w-full px-[1.25rem] py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <div class="space-y-[1rem] mb-[2rem]">
        <label for="psw" class="block text-[0.875rem] font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          class="w-full px-[1.25rem] py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full h-[3rem] text-[1.125rem] font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:ring-[0.125rem] focus:ring-green-500"
      >
        Login
      </button>
    </div>
  </div>
</template>
<script setup></script>

<style scoped></style>

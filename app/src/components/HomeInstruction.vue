<template>
  <div class="form-popup fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]">
    <div class="form-container bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
      <h1 class="text-3xl font-bold text-center text-gray-800">Login</h1>

      <div class="space-y-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          class="w-full px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
        />
      </div>

      <div class="space-y-4">
        <label for="psw" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          class="w-full px-5 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
        />
      </div>

      <div class="flex justify-center">
        <button
          type="submit"
          class="w-full px-6 h-[3rem] text-lg font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

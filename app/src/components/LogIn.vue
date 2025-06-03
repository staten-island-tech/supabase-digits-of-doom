<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]">
    <div
      class="bg-white p-[1.5rem] sm:p-[2rem] rounded-lg shadow-lg max-w-[90%] sm:max-w-[30rem] w-full space-y-[1rem] sm:space-y-[1.5rem]"
    >
      <h1 class="text-[1.5rem] sm:text-[1.875rem] font-bold text-center text-gray-800">Login</h1>

      <div class="space-y-[0.75rem] sm:space-y-[1rem]">
        <label for="email" class="block text-[0.8rem] sm:text-[0.875rem] font-medium text-gray-700">
          Email
        </label>
        <input
          v-model="login.email"
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          class="w-full px-[1rem] sm:px-[1.25rem] py-[0.6rem] sm:py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <div class="space-y-[0.75rem] sm:space-y-[1rem] mb-[1.5rem] sm:mb-[2rem]">
        <label for="psw" class="block text-[0.8rem] sm:text-[0.875rem] font-medium text-gray-700">
          Password
        </label>
        <input
          v-model="login.password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          class="w-full px-[1rem] sm:px-[1.25rem] py-[0.6rem] sm:py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <button
        @click="handleLogin"
        class="w-full h-[2.75rem] sm:h-[3rem] text-[1rem] sm:text-[1.125rem] font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:ring-[0.125rem] focus:ring-green-500"
      >
        {{ loading ? 'Logging In...' : 'Login' }}
      </button>

      <p v-if="error" class="text-red-600 text-center text-[0.875rem]">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { logIn } from '../auth'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const login = reactive({
      email: '',
      password: '',
    })
    const error = ref<string | null>(null)
    const loading = ref(false)
    const router = useRouter()

    const handleLogin = async (): Promise<void> => {
      error.value = null
      loading.value = true
      try {
        await logIn({ email: login.email, password: login.password })
        router.push('/')
      } catch (err: any) {
        error.value = err.message || 'Login failed.'
        console.error(err)
      } finally {
        loading.value = false
      }
    }

    return {
      login,
      error,
      loading,
      handleLogin,
    }
  },
})
</script>

<style scoped>
* {
  margin: 0.5rem;
}
</style>

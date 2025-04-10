<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[2px]">
    <div
      class="bg-white p-[1.5rem] sm:p-[2rem] rounded-lg shadow-lg max-w-[90%] sm:max-w-[30rem] w-full space-y-[1rem] sm:space-y-[1.5rem]"
    >
      <h1 class="text-[1.5rem] sm:text-[1.875rem] font-bold text-center text-gray-800">Sign Up</h1>

      <div class="space-y-[0.75rem] sm:space-y-[1rem]">
        <label for="email" class="block text-[0.8rem] sm:text-[0.875rem] font-medium text-gray-700">
          Email
        </label>
        <input
          v-model="email"
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
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          class="w-full px-[1rem] sm:px-[1.25rem] py-[0.6rem] sm:py-[0.75rem] border rounded focus:ring-[0.125rem] focus:ring-green-500 bg-gray-100"
        />
      </div>

      <button
        @click="signUp"
        class="w-full h-[2.75rem] sm:h-[3rem] text-[1rem] sm:text-[1.125rem] font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:ring-[0.125rem] focus:ring-green-500"
      >
        {{ loading ? 'Signing Up...' : 'Sign Up' }}
      </button>

      <p v-if="error" class="text-red-600 text-center text-[0.875rem]">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '@/supabase'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const loading = ref(false)

    const signUp = async () => {
      error.value = ''
      loading.value = true

      try {
        const { data, error: signupError } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        })

        if (signupError) throw signupError

        console.log('User signed up successfully:', data)
        alert('Check your email to confirm your account!')
      } catch (err) {
        error.value = err.message || 'Error no good'
        console.error('Error signing up:', err)
      } finally {
        loading.value = false
      }
    }

    return {
      email,
      password,
      error,
      loading,
      signUp,
    }
  },
}
</script>

<style scoped>
* {
  margin: 0.5rem;
}
</style>

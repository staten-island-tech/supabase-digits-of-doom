import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false);
  const user = ref<any | null>(null);
  const id = ref<any | null>(null);

  function setLoggedIn(newId: any, newUser: any) {
    isLoggedIn.value = true;
    user.value = newUser;
    id.value = newId;
  }

  function setLoggedOut() {
    isLoggedIn.value = false;
    user.value = null;
    id.value = null;
  }

  return {
    isLoggedIn,
    user,
    id,
    setLoggedIn,
    setLoggedOut,
  };
});

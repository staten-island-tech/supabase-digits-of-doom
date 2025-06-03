import { supabase } from './supabase';
import { useAuthStore } from './stores/authStore';
import type { LoginRequest, LoginResponse } from '../types/types';

export const logIn = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }

  if (data.session && data.user) {
    const loginResponse: LoginResponse = {
      user: {
        id: data.user.id,
        email: data.user.email ?? '',
        inventory: []
      },
      token: data.session.access_token,
    };

    const authStore = useAuthStore();
    authStore.setLoggedIn(data.user.id, data.session.access_token);

    return loginResponse;
  } else {
    throw new Error('Session data is null');
  }
};

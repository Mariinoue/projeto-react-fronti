import { useState } from 'react';
import type { User } from '../types/User';
import { authService } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  function login() {
    const loggedUser = authService.login();
    setUser(loggedUser);
  }

  function logout() {
    setUser(null);
  }

  return { user, login, logout };
}

import type { User } from '../types/User';

export const authService = {
  login(): User {
    // Simula login
    return { id: 1, name: 'Vinicius' };
  },
};

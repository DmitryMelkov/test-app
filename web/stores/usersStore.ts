import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
}

class UsersStore {
  users: User[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.loading = true;
    try {
      const response = await axios.get<User[]>('http://localhost:3001/api/users');
      this.users = response.data;
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      this.loading = false;
    }
  }
}

export const usersStore = new UsersStore();

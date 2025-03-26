import { create } from "zustand";
import request from "../utils/request";
import {
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
} from "../utils/cookies";

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  token: string | null;
  user: IUser | null;
}

export const useUsersStore = create<UserState>((set, get) => ({
  token: getAccessToken() || null,
  user: null,

  getUserInfo: async () => {
    const response = await request.post("/auth/get-user");
    set({ user: response.data as IUser });
  },

  getNewToken: async (user_id: string) => {
    const response = await request.post<{ access_token: string }>(
      "/auth/get-token",
      { user_id }
    );
    setAccessToken(response.data.access_token);
    set({ token: response.data.access_token });
  },

  resetToken: () => {
    removeAccessToken();
    removeRefreshToken();
    set({ token: null, user: null });
  },
}));

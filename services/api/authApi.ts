
import client from "./client";

export const authApi = {
  login: async (data: any) => {
    const res = await client.post("/auth/login", data);
    return res.data;
  },
  register: async (data: any) => {
    const res = await client.post("/auth/register", data);
    return res.data;
  },
  google: async (data: any) => {
    const res = await client.post("/auth/google", data);
    return res.data;
  },
  getMe: async (token: string) => {
    const res = await client.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  }
};

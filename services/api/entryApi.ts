// services/api/entryApi.ts
import { auth } from "../../firebase";

export const entryApi = {
  async list() {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");

    const idToken = await user.getIdToken();

    const res = await fetch("http://localhost:4000/api/entries", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    });

    if (!res.ok) throw new Error("Failed to fetch entries");
    return res.json();
  },

  async create(data: any) {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");

    const idToken = await user.getIdToken();

    const res = await fetch("http://localhost:4000/api/entries", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Failed to create entry");
    return res.json();
  }
};

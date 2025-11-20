
import client from "./client";

export const exportApi = {
  timeline: async () => {
    const res = await client.get("/export/timeline");
    return res.data;
  }
};

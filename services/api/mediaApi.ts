
import client from "./client";

export const mediaApi = {
  upload: async (form: any) => {
    const res = await client.post("/media/upload", form, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  }
};

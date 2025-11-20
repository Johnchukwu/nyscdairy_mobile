
import axios from "axios";

const client = axios.create({
  baseURL: "https://your-api.com"
});

export default client;


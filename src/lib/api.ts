import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7229",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
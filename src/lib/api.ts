import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7229",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
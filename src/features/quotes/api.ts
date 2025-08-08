import { api } from "../../shared/api/axios";
import type { Quote } from "./types";

export const quotesApi = {
  async getQuotes(): Promise<{ quotes: Quote[] }> {
    const response = await fetch("https://dummyjson.com/quotes");
    if (!response.ok) throw new Error("Failed to fetch quotes");
    return response.json();
  },

  async getRandomQuote(): Promise<Quote> {
    const response = await api.get("https://dummyjson.com/quotes/random");
    return response.data;
  },
};

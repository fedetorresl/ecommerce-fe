import axios from "axios";

import { env } from "../env";

export interface ServiceResponse<T> {
  data: T;
  pagination: {
    count: number;
    currentPage: number;
    links: { next: string; previous: string };
    perPage: number;
    total: number;
    totalPages: number;
  };
  status: number;
  success: boolean;
}

const baseApiConfiguration = {
  baseURL: env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
};

const publicApi = axios.create(baseApiConfiguration);

export const getApi = () => publicApi;

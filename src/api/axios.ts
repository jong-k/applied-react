import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";

const API_DELAY = 500;

const reqScheduler = (axiosInstance: AxiosInstance, delay: number) => {
  let lastRequestTime: number | undefined = undefined;

  const scheduler = (config: InternalAxiosRequestConfig) => {
    const now = Date.now();
    if (lastRequestTime !== undefined) {
      const waitTime = lastRequestTime + delay - now;
      lastRequestTime = Math.max(lastRequestTime + delay, now);
      if (waitTime > 0) {
        return new Promise<InternalAxiosRequestConfig>((resolve) =>
          setTimeout(() => resolve(config), waitTime),
        );
      }
    } else {
      lastRequestTime = now;
    }
    return config;
  };

  axiosInstance.interceptors.request.use(scheduler);
};

export const api = axios.create({});

reqScheduler(api, API_DELAY);

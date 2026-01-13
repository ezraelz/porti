import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL:  "http://127.0.0.1:8000" || "https://portifolio-awlj.onrender.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const access = localStorage.getItem("access_token");
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
});

// 🚀 Auto-refresh if 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // if 401 and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh_token");
        if (!refresh) {
          throw new Error("No refresh token");
        }

        // get new access token
        const res = await axios.post("/api/refresh/", { refresh });

        const newAccess = res.data.access;
        localStorage.setItem("access_token", newAccess);

        // update header and retry request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;

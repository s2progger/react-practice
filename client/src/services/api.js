const BACKEND_BASE = "http://localhost:3500";

export const API = {
  get: async (path) => {
    const response = await fetch(`${BACKEND_BASE}${path}`);
    return response.json();
  },

  post: async (path, data) => {
    const response = await fetch(`${BACKEND_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  put: async (path, data) => {
    const response = await fetch(`${BACKEND_BASE}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  delete: async (path) => {
    const response = await fetch(`${BACKEND_BASE}${path}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

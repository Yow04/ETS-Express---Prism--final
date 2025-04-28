import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

// Membuat axios dengan settingan default
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Membuat interceptor untuk menambahkan x-api-key ke setiap request
api.interceptors.request.use(
  (config) => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      config.headers['x-api-key'] = `${apiKey}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Menambahkan interceptor untuk menangani response error
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      
      return Promise.reject({
        message: error.response.data.message || 'An error occurred',
        status: error.response.status,
      });
    } else if (error.request) {
      
      return Promise.reject({
        message: 'No response from server',
        status: 0,
      });
    } else {
      
      return Promise.reject({
        message: error.message,
        status: 0,
      });
    }
  }
);

export const authApi = {
  register: (userData) => api.post('/register', userData),
  login: (credentials) => api.post('/login', credentials),
};

export const recipeApi = {
  saveCustom: (recipeData) => api.post('/recipes/custom', recipeData),
  myRecipes: () => api.get('/recipes/custom'),
  update: (id, recipeData) => api.put(`/recipes/custom/${id}`, recipeData),
  delete: (id) => api.delete(`/recipes/custom/${id}`),
};

export default api; 
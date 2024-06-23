import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get tokens from local storage (or any other storage mechanism)
const getTokens = () => {
  return {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
};

// Function to store tokens in local storage
const storeTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

// Function to remove tokens from local storage
const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

// Function to refresh tokens
const refreshTokens = async () => {
  const { refreshToken } = getTokens();
  if (!refreshToken) throw new Error('No refresh token available');

  const response = await axios.post('https://your-api-base-url.com/auth/refresh-token', {
    refreshToken,
  });

  const { accessToken, refreshToken: newRefreshToken } = response.data;
  storeTokens(accessToken, newRefreshToken);

  return accessToken;
};

// Request interceptor to add access token to headers
api.interceptors.request.use(
  async (config) => {
    const { accessToken } = getTokens();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshTokens();
        axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        clearTokens();
        // Optionally redirect to login page
      }
    }

    return Promise.reject(error);
  }
);

export  const apiRequest = api;





// import axios from 'axios';

// // Create an Axios instance
// const api = axios.create({
//   baseURL: 'https://your-api-base-url.com', // Replace with your API base URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor to add token to headers
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // Replace with your token storage mechanism
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor for handling errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized access, e.g., redirect to login
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
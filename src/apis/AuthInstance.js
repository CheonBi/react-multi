import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, //To use HttpOnly Cookie
});

authAxiosInstance.interceptors.request.use(
  (config) => {
    console.log('Requset Interceptors Success : ', config);

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    console.log('Requset Interceptors Success : ', error);
    return Promise.reject(error);
  }
);

authAxiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },

  async (error) => {
    console.log(error);
    const originalRequest = error.config;

    if (error.response.status == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    try {
      await axios.post('', {}, { withCredentials: true });
      return authAxiosInstance(originalRequest);
    } catch (refreshError) {
      console.log('Refresh Token invalid: ', refreshError);
    }
    return Promise.reject(error);
  }
);

export default authAxiosInstance;

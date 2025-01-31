import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://project116-backend.vercel.app/api/",
  // baseURL: "http://localhost:3000/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;








// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://project116-backend.vercel.app/api/",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error.response || error.message);
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://project116-backend.vercel.app/api/",
  // baseURL: "http://localhost:3000/api/",
  baseURL : "https://charity-backend-bd4y.onrender.com/api/"
});

const host = () => {
  switch (axiosInstance.defaults.baseURL) {
    case "https://project116-backend.vercel.app/api/":
      return "Vercel";
    case "http://localhost:3000/api/":
      return "Local";
    case "https://charity-backend-bd4y.onrender.com/api/":
      return "Render";
    default:
      return "Unknown";
  }
}

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

export default axiosInstance
export {host}








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
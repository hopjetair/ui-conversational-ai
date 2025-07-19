import axios from "axios";

const api = axios.create({
  //baseURL: "http://non-ai-api-alb-1441977773.ap-southeast-2.elb.amazonaws.com",
  //baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: process.env.REACT_APP_LANGGRAPH_API_URL,
  timeout: 60000,
});

api.interceptors.request.use(
  async (config) => {
    // if (accessToken) {
    //     config.headers.Authorization = `${accessToken}`;
    // }
    // console.log("config", config);
    return config;
  },
  (error) => Promise.reject(error)
)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log('error.response.data', error.response.data);
      // console.log('error.response.status', error.response.status);
      // console.log('error.response.headers', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log('error.request', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('error.message', error.message);
    }
    console.log("error.config", error.config);
    return error;
  }
);

export default api;

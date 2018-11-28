export default {
  // https://github.com/yahoo/fetchr
  fetchr: {
    clientConfig: {
      xhrPath: "/proxy",
      xhrTimeout: 1000000,
      context: {},
      contextPicker: {
        GET: [],
      },
    },
  },
  
  // https://github.com/axios/axios
  axios: {
    baseURL: "http://localhost:3000/",
    timeout: 10000,
  },
}
import  axios from "axios"
const axiosInstance = axios.create({
    baseURL: 'http://abiserve.ir/api/',
    headers: {
      'Content-Type': 'application/json',
      'sub-domain': 'test',
    },
    
  });
  
  export default axiosInstance;
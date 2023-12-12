
import axiosInstance from "../services/axios/config";
import axios from "axios"

const getProducts=async()=>{
    
        const response=await axiosInstance.get("product")
        const getData= response.data
        const getRes=getData.data
        const get=getRes.data
        return get
    }
    export {getProducts}


    
// const getProducts=async()=>{
//     const response=await axios.get("https://fakestoreapi.com/products")
//     return response.data

// }



    const FileByTable=(id)=>{
         return `http://abiserve.ir:8000/getFileByTableId/${id}`
    }
    export {FileByTable}




// import axios from 'axios';

// const config = {
//   headers: { 'sub-domain': 'test'  }
// };

// axios.get('/api/data', config)
// .then(response => {
//     console.log(response.data);
// })
// .catch(error => {
//     console.error(error);
// });



//   اصلی پروژه api

// const getProducts=async()=>{
// const response=await axios.get("http://152.89.45.183:8000/api/product")
// const mydata=await response.data
// return mydata.data.data

// }

// export {getProducts}import axios from 'axios';


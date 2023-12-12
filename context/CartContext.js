import {  createContext, useEffect, useState} from "react";
import { getProducts } from "../api/api";

 export const ProductContextCart=createContext()

export  const CartContext = ({children}) => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getProducts());
        }
      
        fetchApi();
    }, [])
 
    
    return (
        <ProductContextCart.Provider value={products}>
            {children}
        </ProductContextCart.Provider>
        );
        
    }
   
import React, { useContext, useState } from 'react';
import { ProductContextCart } from '../../context/CartContext';
import { BsCart2,BsSearchHeart} from 'react-icons/bs';
import {MdArrowBackIos} from 'react-icons/md'
import Link from 'next/link';


import { getProducts } from '../../api/api';
import SinglePage from '../../components/SinglePage';



const SingleProductPage = ({product}) => {
    return (
        <div>
         <SinglePage props={product}/>
        </div>
    );
};

export async function getStaticPaths(context){
    const data= await getProducts()
    const paths=data.map((item)=>({params:{id: String(item.id)}}))
    return {
     paths,
     fallback:false
    };
    
}

export async function getStaticProps(context){
    const {params}=context
    const res=await fetch (`http://abiserve.ir/api/product/${params.id}`,{
        headers: {
            'Content-Type': 'application/json',
            'sub-domain': 'test',
          }  
    })
    const products = await res.json()
    const product=products.data;

    return {
        props:{
            product
        }
    }
}


export default SingleProductPage;
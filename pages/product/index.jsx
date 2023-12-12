
import { BsCart2,BsSearchHeart} from 'react-icons/bs';
import Link from 'next/link';
import { useContext,useEffect,useState } from 'react';
import { ProductContext } from '../../context/ProductCart';
import Cartp from '../../components/shared/Cartp';

import { getProducts } from '../../api/api';


const index = ({products}) => {
    
    // searchbar
    const [search, setSearch]=useState("")
    const [product,setProduct]=useState([...products])
    useEffect(()=>{
            const newProduct=
            products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
            setProduct(newProduct)
        },[search])
  
    // const {state}=useContext(ProductContext)
  
        
    //    pagenation

    const PageHand=(event,page)=>{
        event.preventDefault()
        const indexEnd=8*page;
        const indexStart=indexEnd-8;
        const paginatedHome=products.slice(indexStart,indexEnd)
        setProduct(paginatedHome)
    }
    
    
    
    return (
        <div >
            {/* product page header */}
            <div className="flex items-center  gap-20 justify-center py-4 max-w-[1400px]  mr-[250px]  -mt-[90px]">
            
               

                <Link href="/shopcart">
                <div className='text-current  relative'><BsCart2 size={30}/>
                {/* <span className='bg-current text-white absolute -top-[6px] left-5 flex items-center justify-center rounded-full w-4 h-4 text-xs'>{state.itemsCounter}</span> */}
                </div>
                </Link>
                <div className=' relative '>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder="جستوجو"  className="border placeholder:text-blue-400 text-blue-600 rounded-2xl outline-none px-5 py-1 "  />
                    <div className='text-current absolute top-3 left-2'><BsSearchHeart/></div>
                </div>
           
            </div>
            {/* <Store/> */}

            <div className="grid md:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-4 mt-20 m-auto max-w-[1200px] py-4 ">
            {
                product.slice(0,8).map(item=> <Cartp key={item.id} data={item}/>)
            }
            </div>
            <ul className='flex items-center justify-center gap-4  '>
                {Array.from({length:Math.ceil(products.length/8)}).map((item,index)=>(
                    <li className='w-8 h-8 rounded-full flex items-center
                     justify-center bg-current text-white'key={index+1} onClick={(event)=>PageHand(event,index+1)}>{index +1}</li>

                ))}
            </ul>
           
        </div> 
    );
}


export async function getStaticProps() {
    const data= await getProducts()
    return {
        props:{
            products:data
        }
    }
}

export default index;
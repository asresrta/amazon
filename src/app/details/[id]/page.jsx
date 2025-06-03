"use client"
import { CartContext } from '@/app/Component/ContextProvider';
import Link from 'next/link';
import React, { use, useContext, useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";

function page({params}) {
    let {id}=use(params)
    let {state,dispatch}=useContext(CartContext)
    let [product,setProduct]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then(a=>a.json()).then(b=>setProduct(b))
    },[])
  return (
    <>
    <div className='bg-white'>
    <div className='container mx-auto'>
        <div className='flex justify-evenly gap-2 py-5'>
            <div className='w-[29%]'>
                <img src={product.thumbnail}/>
            </div>
            <div className='details w-[45%]'>
                <div className='font-bold text-[22px]'>{product.title}</div>
                    <div className='line w-[100%] my-1 h-[1px] bg-[gray]'></div>
                    <div className='text-[24px] font-semibold'>$ {product.price}</div>

                <div  className='text-[14px] py-3'>
                    <table className='border-spacing-3'>
                        <tbody>
                        <tr>
                            <td className='font-bold pe-2'>Brand</td>
                            <td>{product.brand}</td> 
                        </tr>
                        <tr>
                            <td className='font-bold pe-2'>Weight</td>
                            <td>{product.weight} kg</td>
                        </tr>
                        <tr>
                            <td className='font-bold pe-2'>Dimensions</td>
                            <td>{product.brand}</td>
                        </tr>
                        <tr>
                            <td className='font-bold pe-2'>Sku</td>
                            <td>{product.sku}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className='line w-[100%] my-1 h-[1px] bg-[gray]'></div>
                    <div className='py-2'>
                        <div className='font-semibold text-[22px]'>About this Item</div>
                        <div className='text-[14px] text-justify'>{product.description}</div>
                    </div>
                </div>
                
            </div>
            <div className='ship border border-[#c7c7c7] rounded w-[19%]'>
                <div className="py-3 px-5">
                    <div className='text-[22px] font-semibold'>$ {product.price}</div>
                    <div className='text-[15px] text-gray-600 pt-2'>Shipping Charges   : $15</div>
                    <div className='text-[15px] text-gray-600 pb-2'>{product.shippingInformation}</div>
                    
                    <div className='flex gap-2'>
                        <div className='flex justify-center items-center'><IoLocationOutline size={14} /></div>
                        <div className=' text-[12px] text-blue-700 hover:text-blue-950 cursor-pointer'>Deliver to Nepal</div>
                        </div>
                        <div className='font-semibold text-[20px] text-[#0c580c]'>{(product.stock>0)?'In Stock':'Out of Stock'}</div>
                        <div className='py-2'>
                            <div className='border px-2 py-1 text-[14px] rounded-xl'>Quantity: 1</div>
                        </div>
                        <div className='bg-yellow-300 hover:bg-[#FFCE12] my-2 text-center py-1 rounded-2xl text-[14px] cursor-pointer' onClick={()=>dispatch({type:'add',payload:product})}>Add to Cart</div>
                        <div className='bg-[orange] hover:bg-[#FF8400] text-center py-1 rounded-2xl text-[14px]'>Buy Now</div>
                    
                </div>
            </div>
        </div>

  
    </div> 
    </div> 

    <section className='up'>
        <Link href={`/details/${product.id}`}><div className='bg-[#37475A] hover:bg-[#485769] py-3 text-[white] text-[14px] flex justify-center items-center'>Back to top</div></Link>
      </section>
    </>
  )
}

export default page

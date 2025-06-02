"use client"
import React, { use, useEffect, useState } from 'react'

function page({params}) {
    let {id}=use(params)
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
                        <div className='font-bold text-[22px]'>About this Item</div>
                        <div className='text-[14px] text-justify'>{product.description}</div>
                    </div>
                </div>
                
            </div>
            <div className='ship w-[19%]'></div>
        </div>

  
    </div> 
    </div> 
    </>
  )
}

export default page

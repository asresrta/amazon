"use client"
import React, { use, useEffect, useState } from 'react'
import { LiaStarSolid } from "react-icons/lia";


function page({params}) {
  let {cat}=use(params)
  let [product,setProduct]=useState([])
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/category/${cat}`).then(a=>a.json()).then(b=>setProduct(b.products))
  },[])

  return (
    <>
    
    <div className='p-2 bg-white border-b-1 border-[gray] shadow-2xl'>Results for <span className='font-bold'>{cat}</span> </div>

    <section className='categoryResult bg-white'>
      <div className='w-[98%] mx-auto py-5'>
        <div className='flex justify between gap-2'>
          <div className='w-[25%]'>
            <div className='font-bold'>Popular Shopping Ideas</div>
          </div>
          <div className='w-[75%]'>
            <div className='font-bold text-[22px]'>Results</div>
            <div className='text-[gray] text-[14px]'>Check each product page for other buying options. Price and other details may vary based on product size and color.</div>
            <div className='flex flex-wrap justify-items-start gap-3 py-3'>
              {product.map((a)=>(
                <div className='w-[24%] border border-[#F5F5F5] shadow ' key={a.id}>
                  <div className='bg-[#dbd8d8]' ><img src={a.thumbnail}/></div>
                  <div className='productInfo   p-2'>
                    <div>{a.title}</div>
                    <div className='flex text-[14px] gap-1 pt-2'>
                      <div className='flex flex-col justify-center items-center'><LiaStarSolid color='orange' /></div><div className='text-gray-700'>{a.rating}</div>
                      </div>
                    <div className='py-2'>$ {a.price}</div>
                    <div className='inline-block text-[14px] px-3 py-1 rounded-2xl border border-[gray]'>See Options</div>
                    <div className='py-2'>In stock: {a.stock}</div>
                  </div>
                   </div>
                ))}
            </div>        
          </div>
        </div>
      </div>
    </section>

    

      
    </>
  )
}

export default page

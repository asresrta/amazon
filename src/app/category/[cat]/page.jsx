"use client"
import { CartContext } from '@/app/Component/ContextProvider';
import Link from 'next/link';
import React, { use, useContext, useEffect, useState } from 'react'
import { LiaStarSolid } from "react-icons/lia";


function page({params}) {
  let {cat}=use(params)
  let {state,dispatch}=useContext(CartContext)
  let [product,setProduct]=useState([])
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/category/${cat}`).then(a=>a.json()).then(b=>setProduct(b.products))
  },[])

  return (
    <>
    
    <div className='p-2 bg-white border-b-1 border-[gray] shadow-2xl'>Results for <span className='font-bold'>{cat}</span> </div>

    <section className='categoryResult bg-white'>
      <div className='w-[98%] mx-auto py-5'>
        <div className='md:flex lg:flex justify between gap-2'>
          <div className='hidden md:block lg:block w-[25%]'>
            <div className='font-bold'>Deals & Discounts</div>
            <div className='text-[14px] pb-2'>
              <div>All Discounts</div>
              <div>Today's Deals</div>
            </div>

            <div className='font-bold'>Price</div>
            <div>$0 - $1000</div>
            <div className='flex gap-x-3'>
              <div className='flex justify-center items-center'><input type='range' className=' md:w-[100px] lg:w-[180px]'/></div>
              <div className='border py-1 px-3 rounded-2xl flex justify-center items-center text-[14px]'>Go</div>
            </div>
            <div>
              <div className='font-bold'>Brands</div>
              <div className='text-[14px]'>
                <div><input type='checkbox'/> Brand 1</div>
                <div><input type='checkbox'/> Brand 2</div>
                <div><input type='checkbox'/> Brand 3</div>
                <div><input type='checkbox'/> Brand 4</div>
              </div>
            </div>

            <div className='py-2'>
              <div className='font-bold'>All Top Brands</div>
              <div className='text-[14px]'><input type='checkbox'/> Top Brands</div>
            </div>
            
            <div>
              <div className='font-bold'>Condition</div>
              <div className='text-[14px] pb-2'>
                <div>New</div>
                <div>Used</div>
              </div>
              <div className='font-bold'>Amazon Certified</div>
              <div className='text-[14px] pb-2'><input type='checkbox'/> Works with Alexa </div>
              <div className='font-bold'>From our Brands</div>
              <div className='text-[14px]'><input type='checkbox'/> Amazon Brands</div>
            </div>
          </div>
          <div className='md:w-[75%] lg:w-[75%] px-3'>
            <div className='font-bold text-[22px]'>Results</div>
            <div className='text-[gray] text-[14px]'>Check each product page for other buying options. Price and other details may vary based on product size and color.</div>
            <div className='md:flex lg:flex flex-wrap justify-items-start gap-3 py-3'>
              {product.map((a)=>(
                <div className='md:w-[31.5%] lg:w-[24%] border border-[#F5F5F5] shadow flex md:block lg:block ' key={a.id}>
                  <div className='md:bg-[#ddd8d8] lg:bg-[#ddd8d8] w-[30%] md:w-[100%] lg:w-[100%] flex items-center' ><Link href={`/details/${a.id}`}><img src={a.thumbnail}/></Link></div> 
                  <div className='productInfo p-2'>
                    <div><Link href={`/details/${a.id}`}>{a.title}</Link></div>
                    <div className='flex text-[14px] gap-1 pt-2'>
                      <div className='flex flex-col justify-center items-center'><LiaStarSolid color='orange' /></div><div className='text-gray-700'>{a.rating}</div>
                      </div>
                    <div className='py-2'>$ {a.price}</div>
                    <div className='flex gap-2'>
                    <div className='inline-block text-[14px] px-3 py-1 rounded-2xl border border-[gray] hover:bg-[#e7e7e7]'><Link href={`/details/${a.id}`}>See Options</Link> </div>
                    <div className='inline-block text-[14px] px-3 py-1 rounded-2xl bg-yellow-400 hover:bg-yellow-500 cursor-pointer' onClick={()=>dispatch({type:'add',payload:a})}>Add to Cart</div>                    
                    </div>
                    <div className='py-2'>In stock: {a.stock}</div>
                  </div>
                   </div>
                ))}
            </div>        
          </div>
        </div>
      </div>
    </section>

    <section className='up'>
        <Link href={`/category/${cat}`}><div className='bg-[#37475A] hover:bg-[#485769] py-3 text-[white] text-[14px] flex justify-center items-center'>Back to top</div></Link>
      </section>

    

      
    </>
  )
}

export default page

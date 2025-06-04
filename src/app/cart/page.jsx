'use client'
import React, { useContext } from 'react'
import { CartContext } from '../Component/ContextProvider'
import { MdDeleteOutline } from "react-icons/md";
import Link from 'next/link';

function page() {
    let {state,dispatch}=useContext(CartContext)
  return (
    <>
               
        {(state.cart.length>0)? <div>
            <div className='w-[98%] mx-auto  md:my-4 lg:my-4 md:flex lg:flex gap-3' >
        <div className='p-3  md:w-[70%] lg:w-[80%] bg-white'>
            <div className='font-semibold text-[28px] px-7'>Shopping Cart</div> 
            <div className='flex justify-end px-8'>Price</div>
            <div className='w-[95%] mx-auto h-[1px] bg-[gray] mb-3'></div>
         {state.cart.map((a)=>(
            <div key={a.id}>
            <div className='flex gap-4 p-3'>
                <div className='w-[30%] flex items-center justify-center'>
                    <img className='w-[130px]' src={a.thumbnail} alt='' />
                </div>
                <div className='w-[60%]'>
                    <div className='text-[20px] font-semibold px-3 py-2'>{a.title}</div>
                    <div className='px-3 pb-1 text-[12px] text-green-800'>{(a.stock>0)?'In Stock':'Out of Stock'}</div>
                    <div className='flex gap-3 px-3'>
                        <div className='w-[100px] flex justify-between border-4 rounded-2xl border-yellow-400 gap-4'>
                            <div className=' ms-2 font-bold text-[18px] flex justify-center items-center'>-</div>
                            <div className='bold'>{state.cart.length}</div>
                            <div className=' me-2 font-bold text-[18px] flex justify-center items-center' onClick={()=>dispatch({type:'add',payload:a})}>+</div>
                            
                        </div>
                            <div className=' ms-2 flex justify-center items-center' onClick={()=>dispatch({type:'remove',payload:a})}><MdDeleteOutline /></div>
                    </div>
                </div>
                <div className='flex justify-end p-3 font-bold w-[10%]'>$ {a.price}</div>
            </div>
                <div className='w-[95%] mx-auto h-[1px] bg-[gray] my-[3px]'></div>
            </div>
         ))}
         </div>

         <div className=' md:w-[30%] lg:w-[20%] h-[120px] bg-white'>
            <div className='p-6'>
                <div className='font-semibold text-[18px]'>Subtotal ({state.cart.length} items): $0</div>
                <div className='bg-yellow-400 hover:bg-yellow-600 text-center rounded-2xl py-1 mt-2'>Proceed to Checkout</div>

            </div>

         </div>
            
        </div>
        </div>:
        <div className='w-[97%] mx-auto md:my-4 lg:my-4 bg-white'>
            <div className='px-3 py-3'>
            <h1 className='text-[24px] font-semibold py-2'>Your Amazon Cart is empty</h1>
            <p className='w-[70%] text-[13px] pt-3'>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                Continue shopping on the <Link href='/'><span className='text-blue-800 hover:text-blue-900 hover:underline'>Amazon.com homepage</span></Link>, learn about today's deals, or visit your Wish List.</p>
            </div>
            </div>}

        

  
      
    </>
  )
}

export default page

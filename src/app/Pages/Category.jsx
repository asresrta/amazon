import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function Category(props) {
    let [product,setProduct]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${props.title}`).then(a=>a.json()).then(b=>setProduct(b.products))
    },[])
  return (
    <>
    
    <div className="flex flex-wrap gap-1">
                    {product.slice(0,4).map((a)=>(
        <div key={a.id} className='w-[48%]'>
            <div className=''>
              <Link href={`/category/${a.category}`}>
              <img src={a.thumbnail} alt=''/>
              <div className='text-[12px] flex flex-col text-center items-center'>{a.title}</div>
              </Link>
            </div>
            <div className='absolute bottom-0 left-1 p-3 text-blue-800 text-[12px] hover:text-blue-950'><Link href={`/category/${a.category}`}> Explore all Products</Link></div>
            </div>

            ))}
          
     </div>

    
      
    </>
  )
}

export default Category

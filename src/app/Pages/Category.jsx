import React, { useEffect, useState } from 'react'


function Category(props) {
    let [product,setProduct]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${props.title}`).then(a=>a.json()).then(b=>setProduct(b.products))
    })
  return (
    <>
    
    <div className="flex flex-wrap">
                    {product.slice(0,4).map((a)=>(
        <div key={a.id} className='w-1/2'>
            <div><img src={a.thumbnail} alt=''/></div>
            <div className='text-[12px] flex flex-col text-center items-center'>{a.title}</div>
            </div>
            ))}
          
     </div>

     <div className='absolute bottom-0 left-1 p-3 text-blue-800 text-[12px]'>Explore all Products</div>
    
      
    </>
  )
}

export default Category

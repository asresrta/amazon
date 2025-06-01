import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

function Category(props) {
    let [product,setProduct]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${props.title}`).then(a=>a.json()).then(b=>setProduct(b.products))
    },[])
  return (
    <>
    <div className="p-4 pb-2 font-bold text-[24px]">Best Sellers in {props.title}</div>
    <div className="px-4 pb-3">
                  <Swiper
            slidesPerView={8}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
             navigation={true}
            modules={[Pagination,Navigation]}
            className="mySwiper2"
          >     {product.slice(0,20).map((a)=>(
            <SwiperSlide key={a.id}><img className='w-100' src={a.thumbnail} alt='' /></SwiperSlide>
            ))}
          </Swiper>
     </div>
    
      
    </>
  )
}

export default Category

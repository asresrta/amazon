import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

function Category(props) {
    let [product,setProduct]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${props.title}`).then(a=>a.json()).then(b=>setProduct(b.products))
    },[])
  return (
    <>
    <div className="p-4 pb-2 font-bold text-[24px]">Best Sellers in {props.title}</div>
    <div className="px-4 pb-2">
                  <Swiper
            slidesPerView={8}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
          769: {
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
        }}
             navigation={true}
            modules={[Pagination,Navigation]}
            className="mySwiper2"
          >     {product.slice(0,20).map((a)=>(
            <SwiperSlide key={a.id}>
              <div className='my-4'>
              <Link href={`/details/${a.id}`}><img className='w-100 hover:scale-[1.2]' src={a.thumbnail} alt='' /></Link>
              </div>
              </SwiperSlide>
              
            ))}
          </Swiper>
     </div>
    
      
    </>
  )
}

export default Category

"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { banner } from "./Img";
import "./globals.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,  FreeMode ,Pagination } from 'swiper/modules';
import CategorySlider from "./Pages/CategorySlider";
import Category from "./Pages/Category";
import Link from "next/link";

export default function Home() {


  return (
    <>
    
    <section className=" banner bg-white">
      <div className=" hidden md:block lg:block bann">
    <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper1"
      >
      {banner.map((a)=>(
              <SwiperSlide key={a.id}>
                  <div className="image-fade relative">
                    <img className="w-full" src={a.img} alt=""/>
                    </div>
                     </SwiperSlide>
          ))}

      </Swiper>
      </div>   
      <div className="block md:hidden lg:hidden bannerMobile pt-3">
         <Swiper
       slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwipermob w-[80%]  rounded-2xl"
      >
        <SwiperSlide><img className="" src='https://m.media-amazon.com/images/I/6190r8cXKaL._SR855,1368_.jpg'/></SwiperSlide>
        <SwiperSlide><img className="" src='https://m.media-amazon.com/images/I/61tjQ79hk9L._SR855,1368_.jpghttps://m.media-amazon.com/images/I/61tjQ79hk9L._SR855,1368_.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://m.media-amazon.com/images/I/51l7ZOsRo7L._SR855,1368_.jpg' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://m.media-amazon.com/images/I/61R7G24e7dL._SR855,1320_.jpg' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://m.media-amazon.com/images/I/61Ld77LHXQL._SR855,1320_.jpg' alt=''/></SwiperSlide>
      </Swiper>
        
      </div> 
    </section>

    <section className="products md:pb-5 lg:pb-5 md:relative lg:relative -top-60 md:-mb-60 lg:-mb-60 z-9">
      <div className="">
      <div className="container mx-auto">
          <div className="md:flex lg:flex justify-evenly flex-wrap md:gap-5 lg:gap-5">
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
                <h1 className="font-bold text-[22px]">Home essentials</h1>
                <div><Category title="home-decoration"/> </div>
              </div>   
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative ">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[22px] bg-white">Get your game on</h1>
                <div><Category title="laptops"/> </div>

              </div>
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[22px]">Fashion for less</h1>
                <div><Category title="womens-dresses"/> </div>
              </div>
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white ">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Top categories in Kitchen appliances</h1>
                <div><Category title="kitchen-accessories" /> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[22px]">Best Mobile Accessories</h1>
                <div><Category title="mobile-accessories"/> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[22px]">Latest Skin Care</h1>
                <div><Category title="skin-care"/> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white ">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[22px]">Cool Glasses</h1>
                <div><Category title="sunglasses"/> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px] ">
              <h1 className="font-bold text-[22px]">New Car Arrivals</h1>
                <div><Category title="vehicle"/> </div>
              </div>
            </div>

      </div>
      </div>
          
      <div className="container hidden md:block lg:block mx-auto bg-white my-5">
            <CategorySlider title='smartphones '/>
      </div>

      <div className="container mx-auto hidden md:block lg:block bg-white my-5">
            <CategorySlider title='mobile-accessories'/>
      </div>

      <div className="container mx-auto">
          <div className="flex justify-evenly flex-wrap md:gap-6 lg:gap-6">
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
                <h1 className="font-bold text-[22px]">Sports Accessories</h1>
                <div><Category title="sports-accessories"/> </div>
              </div>   
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px] ">
              <h1 className="font-bold text-[22px] bg-white">Beauty</h1>
                <div><Category title="beauty"/> </div>

              </div>
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px] ">
              <h1 className="font-bold text-[22px]">Tablets</h1>
                <div><Category title="tablets"/> </div>
              </div>
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[22px]">Designer Furnitures</h1>
                <div><Category title="furniture" /> </div>
              </div>
            </div>
            

      </div>
      </div>

      <div className="container mx-auto hidden lg:block md:block bg-white my-5">
            <CategorySlider title="motorcycle"/>
      </div>

      <div className="container mx-auto">
          <div className="flex justify-evenly flex-wrap md:gap-6 lg:gap-6">
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px] ">
                <h1 className="font-bold text-[22px]">Mens Shirts</h1>
                <div><Category title="mens-shirts"/> </div>
              </div>   
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[22px] bg-white">Mens Shoes</h1>
                <div><Category title="mens-shoes"/> </div>

              </div>
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[22px]">Mens Watches</h1>
                <div><Category title="mens-watches"/> </div>
              </div>
            </div>
             <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[22px]">Womens Bags</h1>
                <div><Category title="womens-bags" /> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px] ">
              <h1 className="font-bold text-[22px]">Womens Jewellery</h1>
                <div><Category title="womens-jewellery"/> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px] ">
              <h1 className="font-bold text-[22px]">Womens Shoes</h1>
                <div><Category title="womens-shoes"/> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[18px]">Womens Watches</h1>
                <div><Category title="womens-watches"/> </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[23.5%] bg-white relative">
              <div className="productBox p-5 h-[430px]">
              <h1 className="font-bold text-[18px]">Fragnances</h1>
                <div><Category title="fragrances"/> </div>
              </div>
            </div>

      </div>
      </div>
          
       </div>   
          
        
      

    </section>
    
    <section className='up'>
        <Link href='/'><div className='bg-[#37475A] hover:bg-[#485769] py-3 text-[white] text-[14px] flex justify-center items-center'>Back to top</div></Link>
      </section>
    
    
    
    
    
    
    </>
  );
}

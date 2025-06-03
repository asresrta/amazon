"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { banner } from "./Img";
import "./globals.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import CategorySlider from "./Pages/CategorySlider";
import Category from "./Pages/Category";
import Link from "next/link";

export default function Home() {


  return (
    <>
    
    <section className="banner bg-white">
      
      <div className="bann">
    <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper1"
      >
      {banner.map((a)=>(
            
              <SwiperSlide key={a.id}>
                
                  <div className="image-fade relative">
                    <img className="" src={a.img} alt=""/>
                    </div>
                     </SwiperSlide>
          ))}

      </Swiper>
      </div>    
    </section>

    <section className="products pb-5 relative -top-60 -mb-60 z-9">
      <div className="">
      <div className="container mx-auto">
          <div className="flex justify-evenly flex-wrap gap-5">
            <div className="w-[24%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
                <h1 className="font-bold text-[22px]">Home essentials</h1>
                <div><Category title="home-decoration"/> </div>
              </div>   
            </div>
             <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5">
              <h1 className="font-bold text-[18px] bg-white">Get your game on</h1>
                <div><Category title="laptops"/> </div>

              </div>
            </div>
             <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Fashion for less</h1>
                <div><Category title="womens-dresses"/> </div>
              </div>
            </div>
             <div className="w-[23.5%]  bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Top categories in Kitchen appliances</h1>
                <div><Category title="kitchen-accessories" /> </div>
              </div>
            </div>
            <div className="w-[23.5%]  bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Best Mobile Accessories</h1>
                <div><Category title="mobile-accessories"/> </div>
              </div>
            </div>
            <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Latest Skin Care</h1>
                <div><Category title="skin-care"/> </div>
              </div>
            </div>
            <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Cool Glasses</h1>
                <div><Category title="sunglasses"/> </div>
              </div>
            </div>
            <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5">
              <h1 className="font-bold text-[18px]">New Car Arrivals</h1>
                <div><Category title="vehicle"/> </div>
              </div>
            </div>

      </div>
      </div>
          
      <div className="container mx-auto bg-white my-5">
            <CategorySlider title='smartphones '/>
      </div>

      <div className="container mx-auto bg-white my-5">
            <CategorySlider title='mobile-accessories'/>
      </div>

      <div className="container mx-auto">
          <div className="flex justify-evenly flex-wrap gap-6">
            <div className="w-[23.5%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
                <h1 className="font-bold text-[22px]">Sports Accessories</h1>
                <div><Category title="sports-accessories"/> </div>
              </div>   
            </div>
             <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5">
              <h1 className="font-bold text-[18px] bg-white">Beauty</h1>
                <div><Category title="beauty"/> </div>

              </div>
            </div>
             <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Tablets</h1>
                <div><Category title="tablets"/> </div>
              </div>
            </div>
             <div className="w-[23.5%]  bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Designer Furnitures</h1>
                <div><Category title="furniture" /> </div>
              </div>
            </div>
            

      </div>
      </div>

      <div className="container mx-auto bg-white my-5">
            <CategorySlider title="motorcycle"/>
      </div>

      <div className="container mx-auto">
          <div className="flex justify-evenly flex-wrap gap-6">
            <div className="w-[23.5%] bg-white">
              <div className="productBox p-5 h-[430px] relative">
                <h1 className="font-bold text-[22px]">Mens Shirts</h1>
                <div><Category title="mens-shirts"/> </div>
              </div>   
            </div>
             <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5">
              <h1 className="font-bold text-[18px] bg-white">Mens Shoes</h1>
                <div><Category title="mens-shoes"/> </div>

              </div>
            </div>
             <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Mens Watches</h1>
                <div><Category title="mens-watches"/> </div>
              </div>
            </div>
             <div className="w-[23.5%]  bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Womens Bags</h1>
                <div><Category title="womens-bags" /> </div>
              </div>
            </div>
            <div className="w-[23.5%]  bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Womens Jewellery</h1>
                <div><Category title="womens-jewellery"/> </div>
              </div>
            </div>
            <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Womens Shoes</h1>
                <div><Category title="womens-shoes"/> </div>
              </div>
            </div>
            <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5 h-[430px] relative">
              <h1 className="font-bold text-[18px]">Womens Watches</h1>
                <div><Category title="womens-watches"/> </div>
              </div>
            </div>
            <div className="w-[23.5%] bg-white h-[430px] relative">
              <div className="productBox p-5">
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

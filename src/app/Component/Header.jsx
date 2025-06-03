'use client'
import React, { useContext, useEffect, useState } from 'react'
import '@/app/globals.css'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import { CartContext } from './ContextProvider';


function Header() {

    let {state,dispatch}=useContext(CartContext)


    let [list,setList]=useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/categories`).then(a=>a.json()).then(b=>setList(b))

        window.addEventListener('scroll',()=>{
            if(window.scrollY>50)
            {
                document.querySelector('header').classList.add('psticky')
            }
            else{
                document.querySelector('header').classList.remove('psticky')
            }
        })

        document.querySelector('.location').onclick=()=>{
            document.querySelector('.locationPopup').classList.toggle('show')
        }
        document.querySelector('.locationPopupRemove').onclick=()=>{
            document.querySelector('.locationPopup').classList.remove('show')
        }

        document.querySelector('.category').onclick=()=>{
            document.querySelector('.categoryPopup').classList.toggle('show')
        }

    },[])

  return (
    <>
    <header className='z-9999'>
        <div className='top bg-[#161D28] text-[white]'>
            <div className='container mx-auto pt-2 pb-1 flex justify-evenly  relative  cursor-pointer '>
                <div className='flex justify-center items-center w-[160px] p-1 me-2 h-[50px] overflow-hidden border border-transparent hover:border-white '><Link href='/'> <Image src='/Images/amazon-logo.jpg' width={140} height={130} alt=''/></Link></div>
                <div className='location p-1 border border-transparent hover:border-white'>
                    <div className='text-[12px] text-[#E6E6E6]'>Deliver to</div>
                    <div className='flex font-bold text-[13px]'>
                        <div><IoLocationOutline size={18} /></div>
                        <div>Nepal</div>
                    </div>
                </div>
                <div className='flex justify-center mx-5'>
                    <div className='category bg-[#E6E6E6] flex gap-2 justify-center items-center px-2 h-[40px] text-[gray] text-[12px] hover:text-[black] hover:bg-[#D4D4D4]  rounded-l-sm'>
                        <div>All</div>
                        <div><IoMdArrowDropdown /></div>
                    </div>
                    <div><input className='bg-[white] text-[black] h-[40px] w-[620px]  px-2' type='text' name='search' placeholder='Search Amazon'/> </div>
                    <div className='bg-[#FEBD69] flex justify-center items-center h-[40px] px-3 hover:bg-[#F3A847] rounded-r-sm'><CiSearch color='black' size={25} /></div>
                </div>
                <div className='group me-3 p-1 border border-transparent hover:border-white'>
                    <div className='text-[12px]'>Hello, sign in</div>
                    <div className=' flex text-[13px] font-bold'>
                        <div>Account and Lists</div>
                    </div>

                        <div className='signupPopup hidden group-hover:block'>
        <div className='signupBox w-[500px] text-[black] bg-white absolute top-16 right-15 rounded z-999'>
            <div>
                <div className='pt-2 pb-1 flex justify-center items-center text-center'>
                    <Link href={`/register/login`}>
                    <div className='bg-[orange] py-1 px-20 rounded-2xl shadow-2xl hover:underline'>Sign in</div>
                    </Link>
                </div>
                <div className='flex justify-center gap-1 text-[12px]'>
                    <div>New Customer?</div>
                    <div className='text-blue-900 underline'>Start Here</div>
                </div>
                <div className="line w-[97%] mx-auto h-[1px] my-1 bg-[#b1abab]"></div>
            </div>
            <div className='flex justify-between gap-2 p-3'>
                <div className='w-[48%] border-r border-[#b1abab]'>
                    <div>
                    <div className='font-bold text-[16px]'>Your Lists</div>
                    <div className='text-[14px] text-[#555252] pt-1 '>
                        <ul>
                        <li>Create a List</li>
                        <li>Find a List or Registry</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='w-[48%]'>
                <div className='font-bold text-[16px] '>Your Account</div>
                <div className='text-[14px] text-[#555252] pt-1'>
                    <ul>
                        <li>Account</li>
                        <li>Orders</li>
                        <li>Recommendations</li>
                        <li>Browsing History</li>
                        <li>Watchlist</li>
                        <li>Video Purchases & Rentals</li>
                        <li>Kindle Unlimited</li>
                        <li>Content & Devices</li>
                        <li>Subscribe & Save Items</li>
                        <li>Memberships & Subscriptions</li>
                        <li>Music Library</li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-white border-r-[15px] border-r-transparent absolute top-13 right-45"></div>   
                        </div>

                </div>
                        <div className='absolute bottom-4 right-47'><IoMdArrowDropdown color='#A7ACB2' size={15} /></div>
                <div className='mx-3 p-1 border border-transparent hover:border-white'>
                        <div className='text-[12px] '>Returns</div>
                        <div className='text-[13px] font-bold'>& Orders</div>    
                </div>
                   <Link href={`/cart`}>  <div className='flex mx-3 p-1 border border-transparent hover:border-white relative'>
                    <div className='flex justify-center items-center'><FiShoppingCart size={30} /></div>
                        <div className='font-bold mt-5'>Cart</div>
                        <div className='absolute top-2 right-3'>{state.cart.length}</div>
                    </div>
                    </Link>
                
            </div>

        </div>
        <div className="nav bottom bg-[#232F3E] text-[14px] h-[40px]">
            <div className='container mx-auto flex text-[white] gap-2  cursor-pointer'>
            <div className='flex p-2 border border-transparent hover:border-white'>
                <div className='flex justify-center items-center me-2'><FaBars /></div>
                <div>All</div>
            </div>
            <div className='p-2 border border-transparent hover:border-white'>Today's Deals</div>
            <div className='p-2 border border-transparent hover:border-white'>Registry</div>
            <div className='p-2 border border-transparent hover:border-white'>Prime Video</div>
            <div className='p-2 border border-transparent hover:border-white'>Gift Cards</div>
            <div className='p-2 border border-transparent hover:border-white'>Customer Service</div>
            <div className='p-2 border border-transparent hover:border-white'>Sell</div>
            </div>
        </div>
    </header>

    <div className='locationPopup hidden'>
        <div className='w-[370px] bg-white center rounded-2xl border  z-99999'>
        <div className=''>
            <div className='p-1 flex justify-between items-center bg-[#f0f2f2] rounded-t-2xl border-b border-[#d5d9d9] '>
            <div className='px-4 font-bold text-[17px] '>Choose your Location</div>
            <div className='locationPopupRemove'>
                <div className='p-3 rounded-2xl '><RxCross2 /></div>
            </div>
            </div>
        </div>
        <div className='px-5 pt-5 pb-3 text-[gray] text-[12px] text-justify'>Delivery options and delivery speeds may vary for different locations</div>
        <div className=' px-5 pb-3'>
            <div className='bg-[#ffda44] hover:bg-[#ffce12] flex justify-center items-center rounded-2xl text-[14px] p-1' >Sign in to see your addresses</div>
        </div>
        <div className='flex px-5 pb-3 justify-between'>
            <div className='h-[1px] w-[30%] bg-[gray] my-2'></div>
            <div className='text-[gray] text-[12px]'>or enter a US zip code</div>
            <div className='h-[1px] w-[30%] bg-[gray] my-2'></div>
        </div>
        <div className='px-5 pb-3 flex justify-between gap-1'>
            <div>
                <input className='border border-[gray] w-[220px] h-[35px] rounded outline-[#2162a1]' type='text' id='zip'/>
            </div>
            <div className='border border-[gray] px-7 py-1 rounded-2xl text-[14px]'>Apply</div>
        </div>
        <div className='flex px-5 pb-3 justify-between'>
            <div className='h-[1px] w-[30%] bg-[gray] my-2'></div>
            <div className='text-[gray] text-[12px]'>or ship outside the US</div>
            <div className='h-[1px] w-[30%] bg-[gray] my-2'></div>
        </div>
        <div className='px-5'>
            <select className='w-[100%] bg-[#f0f2f2] hover:bg-[#e3e6e6] rounded border border-[#d5d9d9] text-[14px] p-1'>
                <option>Nepal</option>
                <option>India</option>
                <option>China</option>
                <option>America</option>
            </select>
        </div>
        <div className='px-5 py-5 flex justify-end'>
            <div className='bg-[#ffda44] hover:bg-[#ffce12] rounded-2xl text-[14px] px-3 py-1 inline-block '>Done</div>
        </div>

        </div>
    </div>

    <div className='categoryPopup hidden'>
        <div className='w-[200px] h-[450px] overflow-y-scroll bg-white absolute left-70 top-10 z-99999'>
            {list.map((a)=>(
                <div key={a.name}><Link href={`/category/${a.slug}`}> <div className='px-2 text-[14px] py-1 hover:bg-blue-700 hover:text-white'>{a.name}</div></Link></div>
            ))}
 
        </div>
    </div>

    
      
    </>
  )
}

export default Header

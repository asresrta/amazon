import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    <footer>
      

      <section className='middle bg-[#232F3E]'>
        <div className='flex justify-between gap-9 py-9 text-[17px] w-[1000px] mx-auto'>
          <div>
            <h2 className='text-white font-bold py-2'>Get to Know Us</h2>
            <ul className='text-[#DDDDDD] text-[14px]'>
              <li className='pb-1'><a href="">Careers</a></li>
              <li className='pb-1'><a href="">Blog</a></li>
              <li className='pb-1'><a href="">About Amazon</a></li>
              <li className='pb-1'><a href="">Investor Relations</a></li>
              <li className='pb-1'><a href="">Amazon Devices</a></li>
              <li className='pb-1'><a href="">Amazon Science</a></li>
            </ul>
          </div>
          <div>
            <h2 className='text-white font-bold py-2'>Make Money with Us</h2>
            <ul className='text-[#DDDDDD] text-[14px]'>
              <li className='pb-1'><a href="">Sell products on Amazon</a></li>
              <li className='pb-1'><a href="">Sell on Amazon Business</a></li>
              <li className='pb-1'><a href="">Sell apps on Amazon</a></li>
              <li className='pb-1'><a href="">Become an Affiliate</a></li>
              <li className='pb-1'><a href="">Advertise Your Products</a></li>
              <li className='pb-1'><a href="">Self-Publish with Us</a></li>
              <li className='pb-1'><a href="">Host an Amazon Hub</a></li>
              <li className='pb-1'><a href="">See More Make Money with Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className='text-white font-bold py-2'>Amazon Payment Products</h2>
            <ul className='text-[#DDDDDD] text-[14px]'>
              <li className='pb-1'><a href="">Amazon Business Card</a></li>
              <li className='pb-1'><a href="">Shop with Points</a></li>
              <li className='pb-1'><a href="">Reload Your Balance</a></li>
              <li className='pb-1'><a href="">Amazon Currency Converter</a></li>
            </ul>
          </div>
          <div>
            <h2 className='text-white font-bold py-2'>Let Us Help You</h2>
            <ul className='text-[#DDDDDD] text-[14px]'>
              <li className='pb-1'><a href="">Amazon and COVID-19</a></li>
              <li className='pb-1'><a href="">Your Account</a></li>
              <li className='pb-1'><a href="">Your Orders</a></li>
              <li className='pb-1'><a href="">Shipping Rates & Policies</a></li>
              <li className='pb-1'><a href="">Returns & Replacements</a></li>
              <li className='pb-1'><a href="">Manage Your Content and Devices</a></li>
              <li className='pb-1'><a href="">Help</a></li>
            </ul>
          </div>
        </div>
      </section>


    </footer>
      
    </>
  )
}

export default Footer

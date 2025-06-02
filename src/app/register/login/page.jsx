import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className='bg-white '>
      <div className='w-[400px] mx-auto py-4'>
        <div className='flex justify-center items-center'>
          <Link href='/'>
          <img className='w-[150px]' src='https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small/amazon-logo-amazon-icon-free-free-vector.jpg' alt=''/>
          </Link>
          </div>     
        <div className='border border-[#bdbbbb] w-[350px] rounded-xl mx-auto my-2'>
          <div className='p-4 '>
          <div className='font-semibold text-[22px]'> Sign in or create account</div>
          <div className='py-2'>
            <form>
            <div className='pb-1 font-semibold'>
              Enter mobile number or email
            </div>
            <div className='pb-2'><input className='border w-[100%] h-[30px] p-2 rounded border-[#bdbbbb]' type='text'/></div>
            <div className=''>
            <button className='py-1 w-full bg-[#f8bf54] hover:bg-[orange] rounded-2xl text-center text-[14px]' type='submit'>Continue</button>
            </div>
            </form>
          </div>
          <div className='text-[13px] text-justify'>By continuing, you agree to Amazon's <h3 className='text-[blue] underline inline hover:text-blue-950 cursor-pointer'>Conditions of Use</h3> and <h3 className='text-[blue] underline hover:text-blue-950 cursor-pointer inline'>Privacy Notice.</h3></div>
          <div className='py-3 text-blue-700 hover:text-blue-950 text-[13px] hover:underline cursor-pointer'>Need help?</div>
          <div className='w-full h-[1px] bg-[#bdbbbb]'></div>
          <div className='pt-3'>
            <div className='font-semibold py-1'>Buying for work?</div>
            <div className='text-blue-700 hover:text-blue-950 hover:underline text-[13px]'><Link href={`/register`}>Create a free business account</Link></div>
          </div>
          </div>
        </div>
        <div className=' w-[350px] rounded-xl mx-auto my-3'>
          <div className='flex gap-1 justify-evenly items-center pb-3'>
            <div className=' w-[30%] h-[1px] bg-[gray]'></div>
            <div className='text-[13px] text-[gray]'>New to Amazon?</div>
            <div className='w-[30%] h-[1px] bg-[gray]'></div>
          </div>
          <Link href={`/register`}>
          <div className='border py-1 rounded-2xl text-[13px] text-center hover:bg-[#f0eeee]'>Create your Amazon Account</div></Link>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default page

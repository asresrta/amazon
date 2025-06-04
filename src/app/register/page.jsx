import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div className='bg-white'>
        <div className=' md:w-[400px] lg:w-[400px] mx-auto py-4'>
            <div className='flex justify-center items-center'>
            <Link href='/'>
            <img className='w-[150px]' src='https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small/amazon-logo-amazon-icon-free-free-vector.jpg' alt=''/>
            </Link>
            </div> 
            <div className='border border-[#bdbbbb] w-[330px] rounded-xl mx-auto my-2'>
          <div className='p-4 '>
          <div className='font-semibold text-[22px]'>Create account</div>
          <div className='py-2'>
            <form>
                <div>
                <div className='pb-1 font-semibold'>Your name</div>
                <div className='pb-2 text-[14px]'><input placeholder='First and last name' className='border w-[100%] h-[25px] p-2 rounded border-[#bdbbbb]' type='text'/></div>
                </div>
                <div>
                <div className='pb-1 font-semibold'>Email</div>
                <div className='pb-2 text-[14px]'><input placeholder='Eg. xyz@gmail.com' className='border w-[100%] h-[25px] p-2 rounded border-[#bdbbbb]' type='email'/></div>
                </div>
                <div>
                <div className='pb-1 font-semibold'>Password</div>
                <div className='pb-2 text-[14px]'><input placeholder='At least 6 characters' className='border w-[100%] h-[25px] p-2 rounded border-[#bdbbbb]' type='password'/></div>
                </div>
            <div className='py-1'>
            <button className='py-1 w-full bg-[#f8bf54] hover:bg-[orange] rounded-2xl text-center text-[14px]' type='submit'>Create your Amazon Account</button>
            </div>
            </form>
          </div>
          <div className='text-[13px] text-justify'>By continuing, you agree to Amazon's <h3 className='text-[blue] underline inline hover:text-blue-950 cursor-pointer'>Conditions of Use</h3> and <h3 className='text-[blue] underline hover:text-blue-950 cursor-pointer inline'>Privacy Notice.</h3></div>
          <div className='w-full h-[1px] bg-[gray] my-7'></div>
          <div className='text-[14px] flex gap-1'>
            <div>Already have a account?</div>
            <div className='text-blue-600 hover:text-blue-950 hover:underline'><Link href={`/register/login`}>Sign in</Link></div>
          </div>
          
          </div>
        </div>
        </div>

    </div>
      
    </>
  )
}

export default page

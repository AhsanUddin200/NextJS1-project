import Link from 'next/link'
import React from 'react'

const AboutNotFound = () => {
  return (
   <>
   <div className='flex flex-col bg-gray-200 h-screen items-center justify-center'>
    <h1  className='font-bold'>This  page is 404 not Found page</h1>
    <br />
    <Link href="/about">This page is not available <span className='block underline'>Click here to go About Main</span></Link>
   </div>
   </>
  )
}

export default AboutNotFound

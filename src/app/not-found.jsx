import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
   <>
   <div className='flex  flex-col bg-gray-400 h-screen items-center justify-center'>
    <h1  className='font-bold'>This  page is 404 not Found page</h1>
    <br />
    <Link href="/">This page is not available <span className='block underline'>Click here to go Main</span></Link>

   </div>
   </>
  )
}

export default NotFound

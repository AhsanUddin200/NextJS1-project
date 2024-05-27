import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center gap-4 min-h-screen flex-col'>
      <h1>Font optimization</h1>
      <h1 className='font-roboto italic' > Font  check here </h1>
     
      <div>
        <Link className="" href="/">
          Go to main
        </Link>
      </div>
    </div>
  )
}

export default page

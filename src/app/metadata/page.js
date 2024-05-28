import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col mt-12'>
      <h1>Here all about Meta Data</h1>


      <div>
        <Link href="/">Go to main page</Link>
        </div><div>
        <Link href="/">Go to main page</Link>
        </div>
    </div>
  )
}

export default page

export function generateMetadata({params}){
    return {
        title:"Meta Data page",
        description:'All about metadata'
    }
}




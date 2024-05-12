"use client"
import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/navigation'  //lec 08
//lec 07
const about = () => {
    const router = useRouter()
  return (
    <div>
      <h2>This is about page</h2>
      <Link href="/">Go to main page</Link>
<br />
      <button className="bg-slate-300 rounded-lg hover:scale-95 hover:font-bold p-2" onClick={()=>router.push("/")}>Go to main page</button>

      <br />
<div className='flex flex-row justify-end gap-4 underline'>
      <Link href="/about/abouttech">Go to about teacher section</Link>

      <Link href="/about/aboutstd">Go to Student Page</Link>

      </div>
    </div>
  )
}

export default about

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
    </div>
  )
}

export default about

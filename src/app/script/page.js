"use client"
import Link from 'next/link'
import React from 'react'
import Script from 'next/script'

export default function page() {
  return (
    <div className='flex justify-center items-center flex-col mt-12'>
      <h1>Get location</h1>
      <Script src='/location.js' onLoad={() => { console.log("file load") }} />      <div>
        <Link href="/">Go to main page</Link>
        </div>
    </div>
  )
}

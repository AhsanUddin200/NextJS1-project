import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <>
    <div className='px-12'>
        <h1 className='text-center mt-4 text-2xl font-semibold'>All Student List</h1>
        <ul>
            <li><Link href="/studentlist/Ahsan"> Ahsan </Link></li>
            <li><Link href="/studentlist/Ali"> Ali</Link></li>
            <li><Link href="/studentlist/Misbah"> Misbah</Link></li>
            <li><Link href="/studentlist/Ibad"> Ibad</Link></li>
            <li><Link href="/studentlist/Banno"> Banno</Link></li>
            <li><Link href="/studentlist/John"> John</Link></li>
        </ul>
        <Link href="/">Go to main page</Link>
    </div>
    </>
  )
}

export default StudentList
"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
    //lec 11
    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
      <div>
     {
        //lec 11
        (pathname !=="/login/logintech" && pathname !=="/login/loginstd" ) ?
        <ul className="flex flex-row  gap-3 justify-end ">
        <li className=" ">
            <h3 className=" ml-auto font-bold no-underline ">Login Navbar</h3>
        </li>
      <li className="underline hover:scale-110 duration-700">
        <Link href="/login">Login Main</Link>
      </li>

      <li className="underline hover:scale-110 duration-700">
        <Link href="/login/loginstd">Student Login page</Link>
      </li>

      <li className="underline hover:scale-110 duration-700">
        <Link href="/login/logintech">Teacher Login page</Link>
      </li>
    </ul>
    : null
     }
        {children}
      </div>
    </>
  );
};

export default layout;

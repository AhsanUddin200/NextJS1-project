import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <ul className="flex flex-row  gap-3 justify-start ">
            <li className=" ">
                <h3 className=" ml-auto font-bold no-underline ">About Navbar</h3>
            </li>
          <li className="underline hover:scale-110 duration-700">
            <Link href="/about">About Main</Link>
          </li>

          <li className="underline hover:scale-110 duration-700">
            <Link href="/about/aboutstd">About Student</Link>
          </li>

          <li className="underline hover:scale-110 duration-700">
            <Link href="/about/abouttech">About Teacher</Link>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
};

export default layout;

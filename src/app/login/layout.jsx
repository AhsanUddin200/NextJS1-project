import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div>
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
        {children}
      </div>
    </>
  );
};

export default layout;

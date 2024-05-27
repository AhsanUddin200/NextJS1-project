import Link from "next/link";
import React from "react";
import Image from "next/image";
import pic from '../../../public/pic.jpeg'

const page = () => {
    console.log(pic)
  return (
    <div className="flex flex-col min-h-screen gap-12 justify-center items-center">
      <h2> Image optimization in next.js</h2>

      <Image src={pic} className="w-[60vh] h-[70vh]"/>


   {/* <img src={pic.src} /> */}

   <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFUl4sDe32_ItDgLecLqSJfRUoIkbCHwCYacU_BcYpg&s'}
      width={400}
      height={150}  />

      <div>
        <Link className="" href="/">
          Go to main
        </Link>
      </div>
    </div>
  );
};

export default page;

import Link from "next/link";
import React from "react";

const Study = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-center text-2xl mt-6">All Lecture Of The Of The Collage <span className="block text-sm font-normal">Note: Use URL like /1/2</span> <span className="block text-sm font-normal">This is the catch all segment of route</span></h1>
        <br />
        <Link href="/">Go to main page</Link>
      </div>
    </>
  );
};

export default Study;

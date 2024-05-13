"use client"
import React from "react";

const Lecture = ({params}) => {
    console.log(params)
  return (
    <>
      <div className="px-12 font-bold">
        <h1 className="font-bold text-center ">Lectures Of The Of The Collage</h1>
      <h4>Day of Collage : {params. lecture [0]}</h4>
      <h4> Lecture No : {params. lecture [1]}</h4>
      </div>
    </>
  );
};

export default Lecture;

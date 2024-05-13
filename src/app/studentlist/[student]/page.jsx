"use client";
import React from "react";

const Student = ({ params }) => {
  return (
    <>
      <div className="px-12">
        <h1 className="text-center mt-4 text-2xl font-semibold">
          Student Details
        </h1>
        <h3>Name : {params.student}</h3>
        <h3>Age : {params.age}</h3>
        <h3>Grade : {params.grade}</h3>
        <h3>Perfomance : {params.perfomance}</h3>
      </div>
    </>
  );
};

export default Student;

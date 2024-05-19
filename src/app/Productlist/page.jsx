"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log(data);
      setProduct(data.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='flex justify-center mt-12 font-extrabold'>All Product List</h1>
      {product.map((item) => (
        <h6 className='text-xl'> Name: {item.title} Price: {item.price}</h6>
      ))}

<div className="flex justify-end p-4">
      <Link  href="/">Go to Main Page</Link>
    </div>
    </div>
    
  );
};

export default Page;

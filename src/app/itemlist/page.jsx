import Link from 'next/link'
import React from 'react'
import Product from './product';

async function item1list(){
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  let item1 = await item1list();  
  return (
    <div>
      <h1 className='flex justify-center mt-12 font-extrabold'>All Items List</h1>
      {item1.map((item) => (
        <div>
          <h4>Name: {item.title}</h4>
          <Product price={item.price}/>
          </div>
       
      ))}
      <div className='flex justify-end p-12'>
        <Link href="/">Go to Main Page</Link>
      </div>
    </div>
  )
}

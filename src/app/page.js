"use client";
import Link from "next/link";  //lec08
import { useState } from "react";
import {useRouter} from 'next/navigation'  //lec 08
export default function Home() {
  // State
  const [state, setState] = useState("Abiha");
  const banana = () => {
    setState("Ahsan Abiha and Abdul rehman");
  };

  //Compnent to component

  const Innercomp= () =>{
    return(
    <h1>This is INNER COMPONENT</h1>
    )
  }
//lec 08
  const  router = useRouter()

  // Function
  // const banana=()=>{
  //   alert("Are you want banana shake")
  // }
  return (
    <main className="flex min-h-screen bg-green-50  items-center flex-col justify-center p-24">
      {/* Lec 03 */}
      {/* <h1>Home page</h1>
    <User   name="Ahsan"/>
    <User   name="Abiha"/> */}

      {/* Lec 4 */}

      <h1>Events, function and state {state}</h1>

      <button
        onClick={banana}
        className="bg-black px-2 py-1 text-white rounded-lg hover:scale-75 duration-700 hover:font-bold"
      >
        Click me
      </button>
      <Innercomp />

      <Link href="/login" className="mb-5 mt-5">Go to login page</Link>
      <Link href="/about">Go to about page</Link>
<div className="flex flex-row gap-2">
      <button className="bg-slate-300 rounded-lg hover:scale-95 hover:font-bold p-2" onClick={()=>router.push("/login")}> Go to login page</button>
      <button className="bg-slate-300 rounded-lg hover:scale-95 hover:font-bold p-2" onClick={()=>router.push("/about")}>Go To About</button>
      
</div>
    </main>
  );
}
{
  /* Lec 03 */
}
// const User=(props)=>{
//   return(
//     <div>
//     <h2>User is here  {props.name}</h2>

//     </div>
//     )
//   }

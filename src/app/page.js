"use client"

export default function Home() {
  const banana=()=>{
    alert("Are you want banana shake")
  }
  return (
    <main className="flex min-h-screen bg-green-50  items-center flex-col justify-center p-24">
   
   {/* Lec 03 */}
    {/* <h1>Home page</h1>
    <User   name="Ahsan"/>
    <User   name="Abiha"/> */}


{/* Lec 4 */}

<h1>Events, function and state</h1>
<button onClick={banana} className="bg-black px-2 py-1 text-white rounded-lg">
  Click me
</button>

    </main>
  );
}
  {/* Lec 03 */}
// const User=(props)=>{
//   return(
//     <div>
//     <h2>User is here  {props.name}</h2>

//     </div>
//     )
//   }


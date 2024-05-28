import Link from "next/link";
import React from "react";

async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function page() {
  let users = await userList();
//   console.log(users);
  return (
    <div>
      <div className="flex justify-center items-center gap-4 min-h-screen flex-col mt-12 ">
        <h1 className="font-bold bg-gray-200 rounded-lg px-4 py-2">User Name List</h1>

        <div className="flex flex-col items-start w-full px-12">
        {users.map((item,index) => (
          <div  key={index}>
            <h3>User Name: {item.firstName}</h3>
          </div>
        ))}
        </div>

        <div>
          <Link className="" href="/">
            Go to main
          </Link>
        </div>
      </div>
    </div>
  );
}

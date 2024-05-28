import Link from "next/link";
import React from "react";
import getuser from "../../../services/getuser";
import user from "@/component/user";


export default async function page() {
  const getuserlist = getuser();
  const users = await getuserlist;
  // console.log(users)
  
  return (
    <div className="">
      <h3 className="flex justify-center items-center">User List</h3>

      {users.map((user) => (
        <div key={user.id}>
          <h3>
            <Link className="px-12" href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </h3>
        </div>
      ))}

      <div className="mt- flex justify-end items-end">
        <Link href="/">Go to main Page</Link>
      </div>
    </div>
  );
}

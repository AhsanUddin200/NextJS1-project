import Link from "next/link";
import React from "react";
import getuser from "../../../../services/getuser";

export default async function Page(props) {
  const getuserlist = getuser();
  const users = await getuserlist;
  const currentId = props.params.userId;
  const userData = users[currentId - 1];
  //  console.log(users[currentId-1])

  return (
    <div>
      <h3 className="flex justify-center items-center">User Details</h3>

      <h6>Id: {userData.id}</h6>
      <h6>Name : {userData.name}</h6>
      <h6>Website: {userData.email}</h6>
      <div className=" flex justify-end items-end">
        <Link href="/">Go to static site Page</Link>
      </div>
    </div>
  );
}



export async function generateStaticParams(){
  const getuserlist = getuser();
  const users = await getuserlist;
  return users.map(user=>({
    staticsiteId:user.id.toString()
  }))

}
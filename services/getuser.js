import React from "react";

export default async function getuser() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();

  return 
  <div>

  </div>;
}

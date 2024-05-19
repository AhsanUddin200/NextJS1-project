"use client";
export default function Product({ price }) {
  console.log(price);
  return (
    <>
      <div>
        <button
          className="px-2 py-2 bg-gray-500 rounded mx-2"
          onClick={() => alert(price)}
        >
          Check price
        </button>
      </div>
    </>
  );
}

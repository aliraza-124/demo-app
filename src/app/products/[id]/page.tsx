"use client";

import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string | undefined;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Product Detail</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Product ID: {id}</h2>
        <p className="mt-4 text-gray-700">
          This is a detailed page for the product with ID: {id}.
        </p>
        {/* Add more product details here if needed */}
      </div>
    </div>
  );
}

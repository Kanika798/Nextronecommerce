// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { sanitize } from "@/lib/sanitize";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-4 bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-500 group w-full">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-[260px] rounded-2xl group-hover:scale-105 transition-transform duration-500"
          alt={sanitize(product?.title) || "Product image"}
        />
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={
          color === "black"
            ? `text-lg text-slate-800 font-bold mt-2 uppercase tracking-tight line-clamp-1`
            : `text-lg text-slate-800 font-bold mt-2 uppercase tracking-tight line-clamp-1`
        }
      >
        {sanitize(product.title)}
      </Link>
      <p
        className={
          color === "black"
            ? "text-2xl text-blue-600 font-black"
            : "text-2xl text-blue-600 font-black"
        }
      >
        ${product.price}
      </p>

  
      <Link
        href={`/product/${product?.slug}`}
        className="block flex justify-center items-center w-full uppercase bg-slate-900 px-0 py-4 text-sm rounded-full font-bold text-white shadow-lg group-hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 tracking-widest"
      >
        <p>View product</p>
      </Link>
    </div>
  );
};

export default ProductItem;

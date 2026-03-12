import { getCategories } from "@/actions/server/categories";
import Image from "next/image";
import React from "react";

const Feature = async () => {
  const feature = await getCategories();

  return (
    <div>
      <section className="py-20 ">
        <div className=" mx-auto px-0 md:px-8">
          <div className="text-center mb-8">
            {/*  <h2 className="text-3xl md:text-5xl  font-black text-gray-900">
              Feature Collections
            </h2> */}
            <h1 className=" text-3xl md:text-5xl   font-black text-white tracking-tight leading-[1.1] sm:leading-tight">
              Feature
              <span className="block sm:inline text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-(--color-accent)">
                <span> Collections</span>
              </span>
            </h1>
            <div className="h-1 w-20 bg-(--color-primary) mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feature.slice(0, 3).map((item) => (
              <div
                key={item?._id.toString()}
                className="group relative h-80 overflow-hidden rounded-3xl bg-gray-100 cursor-pointer"
              >
                <Image
                  src={item?.imageUrl}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  alt={item?.title || "product image"}
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {item.category}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;

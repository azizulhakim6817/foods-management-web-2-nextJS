"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ProductsCart = ({ productItems }) => {
  return (
    <div>
      {/* Product Grid */}
      <section className=" md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {productItems?.slice(0, 6)?.map((product, i) => (
              <div
                key={product?._id.toString()}
                className="group relative flex flex-col shadow-2xl rounded-xl"
                style={{ "--delay": `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative rounded-xl bg-gray-100 mb-6 group overflow-hidden ">
                  <Image
                    src={product?.imageUrl}
                    alt={product?.title}
                    width={400}
                    height={400}
                    sizes="(max-width:768px) 100vw, 400px"
                    className="object-cover w-full h-56 rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-1 left-1 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {product?.category || "General"}
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 pb-4">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 leading-none dark:text-white">
                      {product?.title}
                    </h3>
                    <span className="text-xl font-light text-gray-400 dark:text-white">
                      ${product?.price}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm line-clamp-2 mb-8 leading-relaxed dark:text-white">
                    {product?.shortDesc || "No description available."}
                  </p>

                  <Link
                    href={`/products/${product?._id}`}
                    className="group/btn relative w-full overflow-hidden py-4 rounded-2xl bg-accent dark:text-white text-white font-bold transition-all active:scale-[0.98] block text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/btn:-translate-y-10">
                      View Details
                    </span>
                    <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-y-10 transition-transform duration-300 group-hover/btn:translate-y-0 text-white dark:text-white">
                      Get Started <ArrowRight size={18} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsCart;

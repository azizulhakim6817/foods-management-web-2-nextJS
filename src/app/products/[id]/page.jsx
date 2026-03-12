"use server";
import { singleProductById } from "@/actions/server/products";
import BackButton from "@/components/button/BackButton";
import {
  ArrowLeft,
  Star,
  Clock,
  Shield,
  Share2,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await singleProductById(id);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  md:gap-16">
          {/* Left Side: Large Image Gallery Wrapper */}
          <div className="relative mt-4">
            <div className=" bg-gray-50 rounded-2xl shadow-2xl dark:bg-black">
              <Image
                src={product?.imageUrl}
                alt={product?.title}
                width={700}
                height={300}
                className="object-cover rounded-2xl mt-4"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-black text-white px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-tighter">
                {product?.priority}
              </div>
            </div>
            <div className="px-2 py-0 md:px-4 absolute top-0 mr-10 md:left-8 mt-6 md:mt-8 bg-accent rounded-2xl hover:bg-accent hover:text-white">
              <BackButton />
            </div>
          </div>

          {/* Right Side: Product Information */}
          <div className="flex flex-col py-20 ">
            <div>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">
                <span>{product.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              </div>
              <span className="text-gray-300 text-xs dark:text-white">
                {new Date(product.createdAt).toLocaleString()}
              </span>
              <h1 className="text-5xl md:text-6xl font-black dark:text-white text-gray-900 leading-[1.1] mb-6 tracking-tighter">
                {product.title}
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-light text-gray-900 dark:text-white">
                  Price : ${product.price}
                </span>
              </div>
            </div>

            <hr className="border-gray-100  mb-6 md:mb-10 dark:text-white" />

            {/* Description Block */}
            <div className="mb-4 md:mb-10">
              <p className="text-gray-500 text-lg leading-relaxed font-medium dark:text-white">
                <span className="text-sm font-black uppercase tracking-widest mb-4">
                  Description :
                </span>
                Description : {product.fullDesc}
              </p>
            </div>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4 md:mb-12">
              <div className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 dark:bg-black dark:border-black">
                <div className="p-2 bg-white dark:bg-black rounded-xl shadow-sm">
                  <Shield size={16} />
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-white ">
                  {product?.priority}
                </span>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-accent dark:bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-secondary transition-all active:scale-[0.98] shadow-xl shadow-black/10">
                Add to Cart
              </button>
              <button className="px-8 py-5 border-2 border-black rounded-2xl font-black text-lg hover:bg-secondary hover:text-white transition-all">
                Wishlist
              </button>
            </div>

            {/* Shipping Note */}
            <div className="mt-8 flex items-center gap-2 text-gray-400 text-sm dark:text-white">
              <Clock size={16} />
              <span>Order now to receive by Friday, March 13</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;

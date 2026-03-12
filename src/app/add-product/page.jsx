"use client";
import { useState } from "react";
import { PlusCircle, Image as ImageIcon } from "lucide-react";
import Swal from "sweetalert2";
import { createProduct } from "@/actions/server/products";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const route = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  //! create products-----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.target;
      const payload = {
        title: form.title.value,
        shortDesc: form.shortDesc.value,
        fullDesc: form.fullDesc.value,
        price: Number(form.price.value),
        priority: Number(form.priority.value) || 0,
        imageUrl: form.imageUrl.value,
        category: form.category.value,
      };
      const res = await createProduct(payload);
      if (res.success) {
        Swal.fire("Success", "Product added successfully!", "success");
        form.reset();
        route.push("/");
      } else {
        Swal.fire("Error", "Failed to add product!", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong", err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl my-8 mx-auto p-6 bg-white rounded-2xl shadow-lg  dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Title */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            required
            className="border border-gray-300 px-2 py-2 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Short Description */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Short Description</label>
          <input
            type="text"
            name="shortDesc"
            placeholder="Enter a brief description"
            required
            className="border border-gray-300 px-2 py-2 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Full Description */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Full Description</label>
          <textarea
            name="fullDesc"
            placeholder="Enter full description"
            required
            className="border border-gray-300 px-2 py-2 rounded-md p-3 h-32 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          />
        </div>
        {/*category  */}
        <div>
          <label className="font-semibold mb-1">Category</label>
          <select
            defaultValue=""
            name="category"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Beauty & Personal Care">
              Beauty & Personal Care
            </option>
            <option value="Sports & Fitness">Sports & Fitness</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>

        {/* Price and Priority */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <label className="font-semibold mb-1">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter price"
              required
              className="border border-gray-300 px-2 py-2 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="font-semibold mb-1">Priority</label>
            <input
              type="number"
              name="priority"
              placeholder="Enter priority"
              className="border border-gray-300 px-2 py-2 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="border border-gray-300 px-2 py-2 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Image URL with Preview */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-gray-500" /> Image URL (optional)
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter image URL"
            className="border border-gray-300 px-2 py-2 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white px-2 py-2 rounded-md hover:bg-secondary transition-colors flex justify-center items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;

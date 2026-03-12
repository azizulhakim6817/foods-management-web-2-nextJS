"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Trash2,
  Eye,
  Search,
  Filter,
  Package,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { deleteProduct, getMenageProducts } from "@/actions/server/products";
import Swal from "sweetalert2";
import ManageProductSkeleton from "./../../components/skeleton/ManageProductSkeleton";

const MyManageProducts = () => {
  const router = useRouter();
  const { status } = useSession();

  const [menageProducts, setMenageProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(true);

  //! fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getMenageProducts();
        setMenageProducts(data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //! redirect if not logged in---------------
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  //! search----------------------------
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getMenageProducts();
      setMenageProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let temp = menageProducts;
    if (searchTerm) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (selectedCategory) {
      temp = temp.filter((p) => p.category === selectedCategory);
    }
    setFilteredProducts(temp);
  }, [searchTerm, selectedCategory, menageProducts]);

  //! delete product
  const handleDelete = async (id) => {
    const res = await deleteProduct(id);
    if (res.success) {
      setMenageProducts((prev) => prev.filter((product) => product._id !== id));
      Swal.fire("success", "Product deleted successfully", "success");
    } else {
      Swal.fire("error", res.message, "error");
    }
  };

  //! Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle category select
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setShowFilterDropdown(false);
  };

  if (status === "loading" || loading) return <ManageProductSkeleton />;

  return (
    <div className="min-h-screen py-16 px-4 md:px-10  dark:bg-black dark:text-white  transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              <Package size={12} /> Asset Control
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-slate-950 dark:text-white">
              Manage{" "}
              <span className="text-slate-400 font-light italic font-serif dark:text-slate-300">
                Catalog.
              </span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative group">
              <Search
                className="absolute left-4 top-5 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition"
                size={18}
              />
              <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by name..."
                className="w-full sm:w-64 pl-12 pr-4 py-2 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/30  dark:bg-slate-800 dark:border-slate-700 dark:text-white transition"
              />
            </div>
            <div className="relative w-full" ref={dropdownRef}>
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className=" w-full flex justify-start items-center  gap-2 px-6 py-2 bg-white border border-gray-100 rounded-2xl font-bold hover:bg-gray-50  dark:hover:bg-black transition-colors  dark:bg-black dark:text-white "
              >
                <Filter size={18} />

                {selectedCategory ? <p>{selectedCategory}</p> : "All Filter"}
              </button>

              {showFilterDropdown && (
                <div className="absolute p-1 w-full top-full mt-2 bg-white dark:bg-black dark:text-whiteborder-gray-100 rounded-xl shadow-lg z-50 dark:text-white">
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full px-3 py-2 rounded-md  focus:ring-2 focus:ring-gray-200  "
                  >
                    <option value="">All Categories</option>
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
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card bg-white border border-slate-200 shadow-sm rounded-[2.5rem] overflow-hidden dark:bg-slate-800 dark:border-slate-700 transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-slate-50 dark:bg-slate-700 transition-colors duration-300">
                <tr>
                  <th className="p-6 text-xs font-bold text-slate-400 dark:text-slate-300 ml-20">
                    Product
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 dark:text-slate-300 text-center">
                    Price
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 dark:text-slate-300 text-center">
                    Priority
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 dark:text-slate-300 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="text-center">
                {filteredProducts
                  ?.filter((p) =>
                    p?.title?.toLowerCase().includes(searchTerm?.toLowerCase()),
                  )
                  .map((product) => (
                    <tr
                      key={product._id.toString()}
                      className="hover:bg-slate-50 dark:hover:bg-black transition-colors duration-300"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-100  dark:bg-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-white">
                            {product?.title?.charAt(0)}
                          </div>

                          <div className="text-left">
                            <div className="font-bold text-slate-900 dark:text-white">
                              {product.title}
                            </div>
                            <div className="text-xs text-slate-400 dark:text-slate-300">
                              {product.shortDesc}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-6 font-bold text-slate-900 dark:text-white">
                        ${product?.price?.toLocaleString()}
                      </td>

                      <td className="p-6">
                        <span className="badge badge-sm bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary-dark">
                          {product.priority}
                        </span>
                      </td>

                      <td className="p-6">
                        <div className="flex justify-center gap-2">
                          <Link
                            href={`/products/${product?._id}`}
                            className="btn bg-accent text-white btn-sm hover:bg-primary dark:hover:bg-black  dark:bg-primary dark:text-white  transition-colors duration-300"
                          >
                            <Eye size={20} />
                          </Link>

                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn bg-secondary btn-sm hover:bg-error dark:bg-red-600 dark:hover:bg-red-500 transition-colors duration-300"
                          >
                            <Trash2 size={20} className="text-white" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {menageProducts?.length === 0 && (
            <div className="p-20 text-center">
              <AlertCircle
                size={48}
                className="mx-auto text-slate-300 dark:text-slate-400 mb-4"
              />

              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                Inventory Empty
              </h3>

              <p className="text-slate-500 dark:text-slate-300 mb-6">
                No products found in database.
              </p>

              <Link href="/add-product" className="btn btn-primary">
                Add First Product
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyManageProducts;

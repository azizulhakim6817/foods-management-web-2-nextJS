"use client";
import React, { useState, useEffect, useRef } from "react";
import { getAllproducts } from "@/actions/server/products";
import ProductsCart from "@/components/carts/ProductsCart";
import { Search, Filter } from "lucide-react";

const ProductsItem = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef(null);

  //! Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllproducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  //! Auto search + filter
  useEffect(() => {
    let temp = products;
    if (searchText) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (selectedCategory) {
      temp = temp.filter((p) => p.category === selectedCategory);
    }

    setFilteredProducts(temp);
  }, [searchText, selectedCategory, products]);

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

  return (
    <div className="min-h-screen text-gray-900 pb-20">
      {/* Header */}
      <header className="pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl w-full">
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Curated{" "}
                <span className="text-gray-400 font-light italic dark:text-white">
                  Collections.
                </span>
              </h1>
              <p className="text-gray-500 dark:text-white">
                Discover our latest arrivals designed for high performance and
                everyday comfort.
              </p>
            </div>

            {/* Search */}
            <div className="w-full flex flex-col sm:flex-row gap-3 md:w-auto relative">
              {/* Search Input */}
              <div className="relative group">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white border dark:bg-black dark:text-white border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-gray-50 transition-all"
                />
              </div>
            </div>
            {/* Filter Dropdown */}
            <div className="relative w-full" ref={dropdownRef}>
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className=" w-full flex justify-start items-center  gap-2 px-6 py-3 dark:bg-black  bg-white border border-gray-100 rounded-2xl font-bold hover:bg-white dark:hover:bg-black transition-colors dark:text-white "
              >
                <Filter size={18} /> Select Filter
              </button>

              {showFilterDropdown && (
                <div className="absolute w-full top-full mt-2 bg-white border dark:text-bl  dark:bg-black dark:text-whiteborder-gray-100 rounded-xl shadow-lg z-50 p-4 dark:text-white">
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-black "
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
      </header>

      {/* Product Grid */}
      <ProductsCart productItems={filteredProducts} />
    </div>
  );
};

export default ProductsItem;

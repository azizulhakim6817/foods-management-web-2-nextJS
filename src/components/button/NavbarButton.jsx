"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";

const NavbarButton = () => {
  const { data: session, status } = useSession();
  //console.log(session);

  if (status === "loading") {
    return <span className="loading loading-spinner loading-sm"></span>;
  }

  return (
    <div className="">
      {status !== "authenticated" ? (
        <div className="flex gap-2">
          <Link href="/login" className="btn btn-accent text-white btn-sm ">
            Login
          </Link>

          <Link href="/register" className="btn btn-accent btn-sm text-white">
            Register
          </Link>
        </div>
      ) : (
        <div
          className="dropdown dropdown-end tooltip tooltip-left"
          data-tip="Azizul Hakim"
        >
          {/* Avatar Button */}
          <div
            tabIndex={0}
            className=" btn btn-ghost btn-circle avatar hover:ring hover:ring-secondary"
          >
            <div className="w-10 rounded-full">
              {/*  <img src={session?.user?.image} alt="user" /> */}
              <Image
                src={session?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className=" space-y-1 mt-3 z-1 p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-md w-56   dark:bg-black dark:text-white"
          >
            {/* User Info */}
            <li>
              <p className="text-[14px] md:text-[16px] font-medium">
                {session?.user?.name}
              </p>
              {/*  <p className="text-xs text-gray-500 truncate">
                {session?.user?.email}
              </p> */}
            </li>

            {/* Menu Items */}
            <li>
              <Link href="/add-product" className="text-[14px] md:text-[16px]">
                📦 Add Product
              </Link>
            </li>

            <li>
              <Link href="/my-manage-products" className="text-[14px] md:text-[16px] ">
                🛍 My Products
              </Link>
            </li>

            <li>
              <Link href="/user-profile" className="text-[14px] md:text-[16px] ">
                👤 Profile
              </Link>
            </li>

            <div className="divider my-1"></div>

            {/* Logout */}
            <li>
              <button
                onClick={() => signOut()}
                className="flex items-center text-[14px] md:text-[16px] font-medium gap-2 text-red-500 hover:bg-red-50"
              >
                <FiLogOut size={18} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarButton;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`font-medium transition-colors duration-200 ${
        path === href ? "text-accent font-semibold" : "text-gray-600 dark:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

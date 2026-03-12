import Link from "next/link";
import Logo from "../logo/Logo";
import NavLink from "../button/NavLink";
import NavbarButton from "../button/NavbarButton";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/blog">Blog</NavLink>
      </li>

      <li>
        <NavLink href="/about">About</NavLink>
      </li>

      <li>
        <NavLink href="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50  shadow px-4 md:px-12">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-4">
        <ThemeToggle />
        <NavbarButton />
      </div>
    </div>
  );
};

export default Navbar;

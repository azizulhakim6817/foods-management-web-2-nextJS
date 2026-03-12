// proxy.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const privateRoutes = [
  "/dashboard",
  "/carts",
  "/contact",
  "/add-product",
  "/my-manage-products",
];

export async function proxy(req) {
  // Get token from request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = !!token;
  const path = req.nextUrl.pathname;

  // Check if the route is private
  const isPrivate = privateRoutes.some((route) => path.startsWith(route));

  if (!isAuthenticated && isPrivate) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/carts/:path*",
    "/add-product/:path*",
    "/my-manage-products/:path*",
  ],
};

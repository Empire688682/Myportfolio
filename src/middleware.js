import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("AdminToken")?.value || "";
  const isAdmin = path === "/admin";

  if (!token && isAdmin) {
    return NextResponse.redirect(new URL("/private", req.url), { status: 307 });
  }
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/admin",
    "/blog",
    "/contact",
    "/portfolio",
    "/private",
    "/service",
  ],
};

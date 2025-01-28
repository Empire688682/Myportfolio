import { NextResponse } from "next/server";


export function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get("AdminToken")?.value || "";
    const isPrivate = path === "/private";
    const isAdmin = path === "/admin";

    if (!token && (isPrivate || isAdmin)) {
        return NextResponse.redirect(new URL("/", req.url), { status: 307 })
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
        "/service"
    ]
}
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  if (url.pathname === "/" && url.searchParams.toString() !== "") {
    return NextResponse.rewrite(
      new URL("/404", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

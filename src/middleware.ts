import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  (req) => {
    // @ts-ignore
    const role = req?.nextauth?.token?.role || "STUDENT";
    if (req.nextUrl.pathname.startsWith("/professor") && role !== "PROFESSOR") {
      return NextResponse.redirect(new URL("/student", req.url));
    }
  },
  { callbacks: { authorized: ({ token }) => !!token }, pages: { signIn: "/signin" } }
);

export const config = { matcher: ["/student/:path*", "/professor/:path*"] };

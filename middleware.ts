import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const unProtectedRoutes = ["/sign-in", "/sign-up"];

export default async function middleware(request: NextRequest){
    const session = await auth();

    const isUnProtected = unProtectedRoutes.some((route)=>request.nextUrl.pathname.startsWith(route));

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);

    if(!session && !isUnProtected){
        const absouteURL = new URL("/sign-in", request.nextUrl.origin);
        return NextResponse.redirect(absouteURL.toString());
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
          }
    });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
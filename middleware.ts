import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const unProtectedRoutes = ["/sign-in"];

export default async function middleware(request: NextRequest){
    const session = await auth();

    const isUnProtected = unProtectedRoutes.some((route)=>request.nextUrl.pathname.startsWith(route));

    if(!session && !isUnProtected){
        const absouteURL = new URL("/sign-in", request.nextUrl.origin);
        return NextResponse.redirect(absouteURL.toString());
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
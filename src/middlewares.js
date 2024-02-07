import { isConnected } from "./middle/logged";
import { NextResponse } from "next/server";

const { AUTH_PAGES } = process.env;
const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

/**
 * @param {NextRequest} request
 * @returns {Promise<NextResponse>}
 */
export default async function middleware(request) {
    const { url, nextUrl } = request;
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        const isConnectedUser = await isConnected(request);
        if (!isConnectedUser)
            return NextResponse.redirect(
                new URL(`/login?next=${nextUrl.pathname}`, url)
            );

        return NextResponse.next();
    }

    if (nextUrl.pathname.startsWith("/auth")) {
        const isConnectedUser = await isConnected(request);
        if (!isConnectedUser)
            return NextResponse.redirect(new URL(`/dashboard`, url));

        return NextResponse.next();
    }

    return NextResponse.next();
}

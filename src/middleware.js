import { NextResponse } from "next/server";
import { isConnected } from "./middlewares/logged";

const { CONNECTED_PAGES, AUTH_PAGES } = process.env;
const isConnectedPages = (url) =>
    CONNECTED_PAGES.split(",").some((page) => page.startsWith(url));

const isAuthPages = (url) =>
    AUTH_PAGES.split(",").some((page) => page.startsWith(url));

/**
 * @param {NextRequest} request
 * @returns {Promise<NextResponse>}
 */
export default async function middleware(request) {
    const { url, nextUrl } = request;
    const isAuthPageRequested = isConnectedPages(nextUrl.pathname);
    const isAuthPage = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        const isConnectedUser = await isConnected(request);
        if (!isConnectedUser)
            return NextResponse.redirect(
                new URL(`/login?next=${nextUrl.pathname}`, url)
            );

        return NextResponse.next();
    }
    if (isAuthPage) {
        const isConnectedUser = await isConnected(request);
        if (isConnectedUser)
            return NextResponse.redirect(new URL(`/dashboard`, url));

        return NextResponse.next();
    }

    return NextResponse.next();
}

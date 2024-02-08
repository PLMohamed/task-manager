import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    cookies().delete("token");
    return new NextResponse(null, {
        status: 200,
        headers: {
            "Set-Cookie":
                "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
        },
    });
};

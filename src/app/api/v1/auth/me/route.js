import db from "@/db/database";
import { verifyJwtToken } from "@/lib/auth";
import { Users } from "@/models/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const authorization = headers().get("authorization");
    const payload = await verifyJwtToken(authorization);
    if (!payload)
        return new NextResponse(
            JSON.stringify({
                status: 401,
                body: {
                    message: "Unauthorized",
                },
            }),
            {
                status: 401,
                headers: {
                    "Set-Cookie":
                        "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
                },
            }
        );

    try {
        const user = await db
            .select({
                id: Users.id,
                first_name: Users.first_name,
                last_name: Users.last_name,
                email: Users.email,
                image: Users.image,
            })
            .from(Users)
            .where(eq(Users.id, payload.id));
        if (user.length === 0)
            return new NextResponse(
                JSON.stringify({
                    status: 404,
                    body: {
                        message: "User not found",
                    },
                }),
                {
                    status: 404,
                    headers: {
                        "Set-Cookie":
                            "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
                    },
                }
            );

        return new NextResponse(
            JSON.stringify({ status: 200, data: user[0] }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: 500,
                body: {
                    message: "Internal server error",
                },
            }),
            {
                status: 500,
                headers: {
                    "Set-Cookie":
                        "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
                },
            }
        );
    }
};

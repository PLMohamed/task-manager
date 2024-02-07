import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { config } from "dotenv";

config();

const { JWT_SECRET_KEY } = process.env;

/**
 * @param {NextRequest} request
 * @returns {Promise<NextResponse>}
 */
export async function isConnected(request) {
    const { cookies } = request;
    const { value: token } = cookies.get("token") ?? { value: null };

    const verifiedToken = token && (await verify(token, JWT_SECRET_KEY));

    if (!verifiedToken) return false;

    return true;
}

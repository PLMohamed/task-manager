import { verifyJwtToken } from "@/lib/auth";
import { NextResponse } from "next/server";

const { JWT_SECRET_KEY } = process.env;

/**
 * @param {NextRequest} request
 * @returns {Promise<NextResponse>}
 */
export async function isConnected(request) {
    const { cookies } = request;
    const { value: token } = cookies.get("token") ?? { value: null };

    if (!token) return false;
    const verifiedToken = await verifyJwtToken(token);
    if (!verifiedToken) return false;

    return true;
}

import { config } from "dotenv";
import db from "@/db/database";
import { Users } from "@/models/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

/**
 * @param {Request} request
 * @returns {NextResponse}
 */
export const POST = async (request) => {
    const { email, password } = await request.json();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email || !password) {
        return new NextResponse(
            JSON.stringify({ status: 400, message: "All fields are required" }),
            { status: 400 }
        );
    }

    if (!emailRegex.test(email))
        return new NextResponse(
            JSON.stringify({ status: 400, message: "Invalid email" }),
            { status: 400 }
        );

    if (password.length < 8)
        return new NextResponse(
            JSON.stringify({
                status: 400,
                message: "Password must be at least 8 characters",
            }),
            { status: 400 }
        );

    try {
        const user = await db
            .select()
            .from(Users)
            .where(eq(Users.email, email));

        if (user.length === 0)
            return new NextResponse(
                JSON.stringify({ status: 404, message: "User not found" }),
                { status: 404 }
            );

        const match = await bcrypt.compare(password, user[0].m2p);
        if (!match)
            return new NextResponse(
                JSON.stringify({ status: 401, message: "Invalid password" }),
                { status: 401 }
            );

        const token = jwt.sign(
            {
                id: user[0].id,
            },
            JWT_SECRET_KEY,
            { expiresIn: "8h" }
        );

        const cookie = serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: "strict",
            expires: new Date(Date.now() + 8 * 60 * 60 * 1000),
            maxAge: 8 * 60 * 60,
            path: "/",
        });

        return new NextResponse(
            JSON.stringify({ status: 200, message: "User logged in" }),
            {
                status: 200,
                headers: { "Set-Cookie": cookie },
            }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ status: 500, message: "Internal server error" }),
            { status: 500 }
        );
    }
};

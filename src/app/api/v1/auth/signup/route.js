import db from "@/db/database";
import { Users } from "@/models/schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

/**
 * @param {Request} request
 * @returns {NextResponse}
 */
export const POST = async (request) => {
    const { email, first_name, last_name, password } = request.body;
    const emialRegex = /^[a-zA-Zéèç0-9+_. ]+@[a-zA-Zéèç0-9+_.]+.[a-zA-Z]{2,4}$/;
    const namesRegex = /^[a-zA-Zéèç ]+$/;

    if (!email || !first_name || !last_name || !password) {
        return NextResponse(
            JSON.stringify({ status: 400, message: "All fields are required" }),
            { status: 400 }
        );
    }

    if (!emialRegex.test(email))
        return NextResponse(
            JSON.stringify({ status: 400, message: "Invalid email" }),
            { status: 400 }
        );

    if (!namesRegex.test(first_name) || !namesRegex.test(last_name))
        return NextResponse(
            JSON.stringify({ status: 400, message: "Invalid name" }),
            { status: 400 }
        );

    if (password.length < 8)
        return NextResponse(
            JSON.stringify({
                status: 400,
                message: "Password must be at least 8 characters",
            }),
            { status: 400 }
        );

    try {
        passwordHashed = await bcrypt.hash(password, 10);
        await db.insert(Users).values({
            email,
            first_name,
            last_name,
            m2p: passwordHashed,
        });

        return NextResponse(
            JSON.stringify({ status: 201, message: "User created" }),
            { status: 201 }
        );
    } catch (error) {
        return NextResponse(
            JSON.stringify({ status: 500, message: "Internal server error" }),
            { status: 500 }
        );
    }
};

"use client";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import ButtonSubmit from "@/components/ButtonSubmit";
import { useRouter } from "next/navigation";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

/**
 * @returns {JSX.Element}
 */
export default function Signin() {
    const [error, setError] = useState(undefined);
    const { push } = useRouter();

    async function sendForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (!formData)
            return setError({
                email: "Email is required",
                password: "Password is required",
            });

        const email = formData.get("email");
        const password = formData.get("password");
        const error = {};
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!email) error.email = "Email is required";
        else if (!emailRegex.test(email)) error.email = "Invalid email";

        if (!password) error.password = "Password is required";
        else if (password.length < 8)
            error.password = "Password must be at least 8 characters";

        if (Object.keys(error).length > 0) return setError(error);

        const result = await fetch("/api/v1/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        const response = await result.json();
        if (response.status === 200) push("/dashboard");
        else setError(response);
    }

    return (
        <form
            onSubmit={sendForm}
            className=" p-12 bg-white flex flex-col items-center gap-9 rounded-3xl border-gray-300 border w-11/12  
                     lg:w-3/6 lg:max-w-lg md:w-3/4"
            noValidate
        >
            <section className="flex flex-col gap-2">
                <h1
                    className={`text-2xl font-bold text-center ${poppins.className}`}
                >
                    Sign in
                </h1>
                <p className={`text-xs text-neutral-400 ${poppins.className}`}>
                    Please enter your credentials to continue
                </p>
            </section>
            <section className="flex flex-col gap-4 w-full">
                {error && error.message && (
                    <p
                        className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md ${poppins.className}`}
                    >
                        {error.message}
                    </p>
                )}
                <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full`}
                    error={error && error.email}
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full`}
                    error={error && error.password}
                />
            </section>
            <section className="flex flex-col gap-4 w-full">
                <ButtonSubmit className={poppins.className} title={"Sign in"} />
                <p
                    className={`text-xs text-neutral-400 ${poppins.className} text-center`}
                >
                    Don't have an account?{" "}
                    <Link href="signup" className="text-blue-500">
                        Sign up
                    </Link>
                </p>
            </section>
        </form>
    );
}

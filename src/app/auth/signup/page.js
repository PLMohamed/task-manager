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
export default function Signup() {
    const [error, setError] = useState(undefined);
    const { push } = useRouter();

    async function sendForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (!formData)
            return setError({
                email: "Email is required",
                password: "Password is required",
                firstName: "FirstName is required",
                lastName: "LastName is required",
            });

        const email = formData.get("email");
        const password = formData.get("password");
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const nameRegex = /^[a-zA-Zçéè ]+$/;
        const errors = {};

        if (!email) errors.email = "Email is required";
        else if (!emailRegex.test(email)) errors.email = "Invalid email";

        if (!password) errors.password = "Password is required";
        else if (password.length < 8)
            errors.password = "Password must be at least 8 characters long";

        if (!firstName) errors.firstName = "FirstName is required";
        else if (!nameRegex.test(firstName))
            errors.firstName = "name must contain only letters";

        if (!lastName) errors.lastName = "LastName is required";
        else if (!nameRegex.test(lastName))
            errors.lastName = "name must contain only letters";

        if (Object.keys(errors).length > 0) return setError(errors);

        const result = await fetch("http://localhost:3000/api/v1/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
            }),
        });

        const response = await result.json();
        if (response.status === 201) {
            fetch("/api/v1/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response.status === 200) push("/dashboard");
                    else push("/signin");
                });
        } else return setError(response);
    }

    return (
        <form
            onSubmit={sendForm}
            noValidate
            className=" p-12 bg-white flex flex-col items-center gap-9 rounded-3xl border-gray-300 border"
        >
            <section className="flex flex-col gap-2">
                <h1
                    className={`text-2xl font-bold text-center ${poppins.className}`}
                >
                    Create an account
                </h1>
                <p className={`text-xs text-neutral-400 ${poppins.className}`}>
                    Review all the information you've provided and make sure
                    it's accurate
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
                    type="text"
                    name="firstName"
                    placeholder="FirstName"
                    className={`w-full`}
                    error={error && error.firstName}
                />
                <InputField
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    className={`w-full`}
                    error={error && error.lastName}
                />
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
                <ButtonSubmit className={poppins.className} title={"Sign up"} />

                <p
                    className={`text-xs text-neutral-400 ${poppins.className} text-center`}
                >
                    Already have an account?{" "}
                    <Link href="signin" className="text-blue-500">
                        Sign in
                    </Link>
                </p>
            </section>
        </form>
    );
}

"use client";
import InputField from "@/components/InputField";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { sendForm } from "./sendForm";
import ButtonSubmit from "@/components/ButtonSubmit";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Signin() {
    const [error, dispatch] = useFormState(sendForm, undefined);
    const { pending } = useFormStatus();

    return (
        <form
            action={dispatch}
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

import InputField from "@/components/InputField";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Signin() {
    return (
        <form
            className=" p-12 bg-white flex flex-col items-center gap-9 rounded-3xl border-gray-300 border w-11/12  
                     lg:w-3/6 lg:max-w-lg md:w-3/4"
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
                <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full`}
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full`}
                />
            </section>
            <section className="flex flex-col gap-4 w-full">
                <button
                    type="submit"
                    className={`bg-blue-500 text-white rounded-md py-2 ${poppins.className}
                    hover:bg-blue-600 w-full transition-all duration-300
                     active:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`}
                >
                    Sign In
                </button>
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

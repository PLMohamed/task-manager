import InputField from "@/components/InputField";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Signup() {
    return (
        <form className=" p-12 bg-white flex flex-col items-center gap-9 rounded-3xl border-gray-300 border">
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
                <InputField
                    type="text"
                    name="firstName"
                    placeholder="FirstName"
                    className={`w-full`}
                />
                <InputField
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    className={`w-full`}
                />
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

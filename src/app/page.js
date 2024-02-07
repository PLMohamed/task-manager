"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function LandingPage() {
    return (
        <section
            className={`container mx-auto px-8 py-36 text-center 
            sm:px-12 ${poppins.className}`}
        >
            <h1
                className={`mb-12 text-5xl font-extrabold leading-tight  
                sm:text-6xl `}
            >
                Manage your tasks with ease
            </h1>
            <p className="leading-relaxed text-slate-700 ">
                Start managing your tasks with our easy to use task manager app.
            </p>
            <p className="mb-12 leading-relaxed text-slate-700 ">
                We provide you with all the tools you need to manage your tasks
                with ease.
            </p>
            <div className="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                    href={"/auth/signup"}
                    className="rounded-md border-0 bg-blue-500 px-12 py-2 text-base text-white shadow-lg shadow-blue-300 transition 
                    hover:bg-blue-600 hover:shadow-blue-400 "
                >
                    Register now
                </Link>
                <Link
                    href={"/auth/signin"}
                    className="rounded-md border-0 bg-slate-300 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-300 transition 
                    hover:bg-slate-400 hover:shadow-slate-400 "
                >
                    Login
                </Link>
            </div>
        </section>
    );
}

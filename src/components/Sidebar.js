"use client";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Sidebar() {
    const { pathname } = useRouter();
    return (
        <nav
            className=" flex flex-col justify-between bg-white rounded-l-md float-left min-h-full
            p-8 border-gray-200 border fixed left-0 top-0 box-border w-40 hover:w-64 transition-all duration-300 z-10 peer group"
        >
            <section className="flex flex-col gap-12 ">
                <h1 className={`text-2xl ${roboto.className} `}>MyWork</h1>
                <div className="py-3">
                    <ul className="text-gray-400 gap-1">
                        <li className="flex justify-between items-center px-4 py-2.5 ">
                            <Link href="/dashboard">
                                <div className="flex items-center gap-4 ">
                                    <img
                                        src={
                                            pathname === "/dashboard"
                                                ? "/icon/homeBlue.svg"
                                                : "/icon/homeGray.svg"
                                        }
                                    />
                                    <span className="hidden group-hover:block transition-all duration-300">
                                        Home
                                    </span>
                                </div>
                                <div></div>
                            </Link>
                        </li>
                        <li className="flex justify-between items-center px-4 py-2.5 ">
                            <Link href="/tasks">
                                <div className="flex items-center gap-4 ">
                                    <img
                                        src={
                                            pathname === "/tasks"
                                                ? "/icon/tasksBlue.svg"
                                                : "/icon/tasksGray.svg"
                                        }
                                    />
                                    <span className="hidden group-hover:block transition-all duration-300">
                                        Tasks
                                    </span>
                                </div>
                                <div></div>
                            </Link>
                        </li>
                        <li className="flex justify-between items-center px-4 py-2.5 ">
                            <Link href="/messages">
                                <div className="flex items-center gap-4 ">
                                    <img
                                        src={
                                            pathname === "/messages"
                                                ? "/icon/messageBlue.svg"
                                                : "/icon/messageGray.svg"
                                        }
                                    />
                                    <span className="hidden group-hover:block transition-all duration-300">
                                        Messages
                                    </span>
                                </div>
                                <div></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section></section>
        </nav>
    );
}

"use client";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

/**
 * @returns {JSX.Element}
 */
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
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex justify-between items-center pl-3.5 py-2.5 gap-1 "
                            >
                                <div className=" grid gap-4 items-center grid-cols-Split20_80 w-8/12 min-w-0  ">
                                    <i
                                        aria-hidden
                                        className={`fa-solid fa-house  text-xl ${
                                            pathname === "/dashboard"
                                                ? "text-blue-500"
                                                : ""
                                        }`}
                                    />
                                    <span className=" opacity-0 group-hover:opacity-100">
                                        Home
                                    </span>
                                </div>
                                {/* Error */}
                                <div className=" bg-red-500 text-white box-border w-5 h-5 rounded flex justify-center items-center "></div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tasks"
                                className="flex justify-between items-center pl-3.5 py-2.5 gap-1 "
                            >
                                <div className=" grid gap-4 items-center grid-cols-Split20_80 w-8/12 min-w-0">
                                    <i
                                        aria-hidden
                                        className={`fa-solid fa-file text-xl ${
                                            pathname === "/tasks"
                                                ? "text-blue-500"
                                                : ""
                                        }`}
                                    />
                                    <span className="opacity-0 group-hover:opacity-100">
                                        Tasks
                                    </span>
                                </div>
                                <div className=" bg-red-500 text-white box-border w-5 h-5 rounded flex justify-center items-center "></div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/messages"
                                className="flex justify-between items-center pl-3.5 py-2.5 gap-1 "
                            >
                                <div className="grid gap-4 items-center grid-cols-Split20_80 w-8/12 min-w-0  ">
                                    <i
                                        aria-hidden
                                        className={`fa-solid fa-message text-xl ${
                                            pathname === "/messages"
                                                ? "text-blue-500"
                                                : ""
                                        }`}
                                    />
                                    <span className="opacity-0 group-hover:opacity-100">
                                        Messages
                                    </span>
                                </div>
                                <div className=" bg-red-500 text-white box-border w-5 h-5 rounded flex justify-center items-center "></div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/notifications"
                                className="flex justify-between items-center pl-3.5 py-2.5 gap-1 "
                            >
                                <div className=" grid gap-4 items-center grid-cols-Split20_80 w-8/12 min-w-0">
                                    <i
                                        aria-hidden
                                        className={`fa-solid fa-bell text-xl ${
                                            pathname === "/notifications"
                                                ? "text-blue-500"
                                                : ""
                                        }`}
                                    />
                                    <span className="opacity-0 group-hover:opacity-100">
                                        Notifications
                                    </span>
                                </div>
                                <div className=" bg-red-500 text-white box-border w-5 h-5 rounded flex justify-center items-center ">
                                    2
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <ul className="text-gray-400 gap-1">
                    <li>
                        <Link
                            href="/settings"
                            className="flex justify-between items-center px-3.5 py-2.5 "
                        >
                            <div className=" grid gap-4 items-center grid-cols-Split20_80 w-8/12 min-w-0 ">
                                <i
                                    aria-hidden
                                    className={`fa-solid fa-gear  text-xl ${
                                        pathname === "/settings"
                                            ? "text-blue-500"
                                            : ""
                                    }`}
                                />
                                <span className="opacity-0 group-hover:opacity-100">
                                    Settings
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className="flex justify-between group-hover:px-3.5 gap-1"
                        >
                            <img src="/pfp.png" />
                            <div className=" flex-col flex opacity-0 group-hover:opacity-100 ">
                                <span
                                    className={` text-gray-900 text-base ${roboto.className} font-medium`}
                                >
                                    Username
                                </span>
                                <span className="text-gray-400 text-sm">
                                    Email@gmail.com
                                </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}

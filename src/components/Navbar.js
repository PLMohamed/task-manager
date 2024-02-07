import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

/**
 * @returns {JSX.Element}
 */
export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-4 bg-white items-center rounded-r mb-4 border-gray-200 border ">
            <div className=" text-gray-900 text-2xl">Team Seven</div>
            <div className="flex items-center justify-around rounded-md bg-neutral-50 border-gray-400 py-2 px-4 min-w-96">
                <label htmlFor="search" className="cursor-text">
                    <i
                        aria-hidden
                        className="fa-solid fa-magnifying-glass text-gray-400"
                    />
                </label>
                <input
                    type="text"
                    placeholder="Search"
                    id="search"
                    autoComplete="off"
                    className={` w-full bg-transparent border-none focus:outline-none text-gray-900 text-sm p-2 ${roboto.className}`}
                />
            </div>
        </nav>
    );
}

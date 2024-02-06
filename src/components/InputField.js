import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export default function InputField({
    type,
    name,
    placeholder,
    className,
    error,
}) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label
                htmlFor={name}
                className={`${poppins.className} font-medium`}
            >
                {placeholder}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                className={`border rounded-md px-4 py-2 
                focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                ${poppins.className}
                ${error ? "border-red-500" : "border-gray-400"}`}
            />
            {error && (
                <span
                    className={`text-red-500 text-sm
                    ${poppins.className}`}
                >
                    {error}
                </span>
            )}
        </div>
    );
}

"use client";

import { useFormStatus } from "react-dom";

/**
 * @param {{ title: string, className: string }} props
 * @returns {JSX.Element}
 */
export default function ButtonSubmit({ title, className }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            aria-disabled={pending}
            disabled={pending}
            className={`bg-blue-500 text-white rounded-md py-2 ${className}
                     hover:bg-blue-600 w-full transition-all duration-300
                      active:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                      ${pending ? "cursor-not-allowed opacity-70" : ""}`}
        >
            {title}
        </button>
    );
}

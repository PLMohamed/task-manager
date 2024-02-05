import React from "react";

export default function InputField({ type, name, placeholder }) {
    return (
        <div>
            <label htmlFor={name} className="sr-only">
                {name}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className=""
            />
        </div>
    );
}

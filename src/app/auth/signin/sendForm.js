"use server";

import { redirect } from "next/dist/server/api-utils";

/**
 * @param {FormState} state
 * @param {FormData} formData
 * @returns {Object<string, string> | void}
 */
export async function sendForm(state, formData) {
    if (!formData)
        return {
            email: "Email is required",
            password: "Password is required",
        };

    const email = formData.get("email");
    const password = formData.get("password");

    const error = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email) error.email = "Email is required";
    else if (!emailRegex.test(email)) error.email = "Invalid email";

    if (!password) error.password = "Password is required";
    else if (password.length < 8)
        error.password = "Password must be at least 8 characters";

    if (Object.keys(error).length > 0) return error;

    const result = await fetch("http://localhost:3000/api/v1/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
    });

    const response = await result.json();

    if (response.status === 200) redirect("/dashboard");
    else return response;
}

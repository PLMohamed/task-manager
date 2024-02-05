import InputField from "@/components/InputField";
import React from "react";

export default function Signup() {
    return (
        <form>
            <article>
                <InputField
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                <InputField type="email" name="email" placeholder="Email" />
            </article>
        </form>
    );
}

"use client";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Logout() {
    const { push } = useRouter();
    useEffect(() => {
        fetch("/api/v1/auth/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            push("/auth/signin");
        });
    }, []);
    return <Suspense />;
}

import { Source_Code_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default async function DashboardLayout({ children }) {
    // Getting token from cookies
    const token = cookies().get("token");
    // getting user data from api
    const response = await fetch("http://localhost:3000/api/v1/auth/me", {
        headers: {
            contentType: "application/json",
            Authorization: `${token.value}`,
        },
        method: "GET",
    });
    const data = await response.json();
    // if error occurs
    if (data.status !== 200)
        return (
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-3xl font-bold text-red-500">
                    {data.body.message}
                </h1>
            </div>
        );

    return (
        <>
            <Sidebar {...data.data} />
            <main className="h-screen ml-40 peer-hover:ml-64 transition-all duration-300">
                <Navbar />
                <article>{children}</article>
            </main>
        </>
    );
}

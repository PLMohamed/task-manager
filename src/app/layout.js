import { Source_Code_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
    title: "Task Manager",
    description:
        "task manager application where users can add, edit, delete tasks and mark them as completed",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${sourceCodePro.className} h-screen bg-gray-100`}>
                <Sidebar />

                <main className="h-screen ml-40 peer-hover:ml-64 transition-all duration-300">
                    <Navbar />
                    <article>{children}</article>
                </main>
            </body>
        </html>
    );
}

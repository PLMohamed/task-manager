import { Source_Code_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
    return (
        <>
            <Sidebar />
            <main className="h-screen ml-40 peer-hover:ml-64 transition-all duration-300">
                <Navbar />
                <article>{children}</article>
            </main>
        </>
    );
}

import { Source_Code_Pro } from "next/font/google";
import "../styles/globals.css";

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
                {children}
                <script
                    src="https://kit.fontawesome.com/da3649da26.js"
                    crossOrigin="anonymous"
                ></script>
            </body>
        </html>
    );
}

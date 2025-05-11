import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Anders' Portfolio",
  description: "Personal portfolio website of Anders, a lover of corgis.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-6 shadow-md">
          <h1 className="text-3xl font-bold">Anders</h1>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Anders
        </footer>
      </body>
    </html>
  );
}


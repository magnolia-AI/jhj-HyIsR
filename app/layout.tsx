import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Anders Portfolio',
  description: 'Personal portfolio of Anders, a lover of corgis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Anders</h1>
            <nav>
              <Link href="#about" className="mr-4 hover:underline">
                About
              </Link>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-6 py-10">
          {children}
        </main>

        <footer className="bg-white shadow-inner py-6 mt-12">
          <div className="container mx-auto px-6 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Anders. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}


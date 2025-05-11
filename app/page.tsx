import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-8">
      <h1 className="text-5xl font-extrabold mb-6">Hi, I'm Anders</h1>
      <p className="text-xl mb-8 max-w-xl text-center">
        I'm a passionate lover of corgis and welcome you to my personal portfolio website.
      </p>
      <section className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full">
        <h2 className="text-3xl font-semibold mb-4">Why I Love Corgis</h2>
        <p className="mb-4">
          Corgis are adorable, energetic, and full of personality. Their short legs and fluffy tails make them irresistibly cute and fun companions.
        </p>
        <div className="relative h-64 w-full rounded overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
            alt="Cute Corgi"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
      <footer className="mt-12 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Anders
      </footer>
    </main>
  );
}


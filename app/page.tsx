import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Anders</h2>
        <p className="text-lg mb-8">
          I'm a passionate lover of corgis and a software developer.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
            alt="Cute corgi dog"
            width={800}
            height={533}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section id="about" className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>
          Hello! I'm Anders, a developer who loves coding and corgis. I enjoy
          building clean and modern web applications and sharing my passion for
          technology and dogs.
        </p>
      </section>

      <section id="projects" className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <ul className="list-disc list-inside">
          <li>Portfolio Website (this site)</li>
          <li>Coming soon: More projects!</li>
        </ul>
      </section>
    </section>
  );
}


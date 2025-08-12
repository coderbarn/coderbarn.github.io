import { projects } from '../data/projects';

export default function Home() {
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Bill Farmer</h1>
      <p className="mb-6">
        VP Engineering, Product Leader, Adjunct Faculty @ UMD.<br/>
        Python, Java, JavaScript, Full Stack, Cyber Threat Intelligence.<br/>
        University of Maryland · University of Pittsburgh · Carnegie Mellon MSIT.
      </p>
      {categories.map(category => (
        <section key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category} Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(p => p.category === category).map((proj, idx) => (
              <a key={idx} href={proj.link} className="block border rounded-lg p-4 hover:shadow-lg transition" target="_blank" rel="noopener noreferrer">
                <img src={proj.image} alt={proj.title} className="w-full h-32 object-cover rounded mb-2"/>
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="text-sm text-gray-600">{proj.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
      <footer className="mt-12 text-xs text-gray-500">
        Page template inspired by <a href="https://github.com/evanca/quick-portfolio" className="underline">evanca</a>
      </footer>
    </main>
  );
}
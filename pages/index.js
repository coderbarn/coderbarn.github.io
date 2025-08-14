import { projects } from '../data/projects';

export default function Home() {
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <main className="max-w-3xl mx-auto p-6">
      {/* Steampunk Hero */}
      <div className="flex items-center mb-10 steampunk-border p-6 bg-parchment relative">
        <img src="/images/profile.jpg" alt="Bill Farmer" className="w-24 h-24 rounded-full border-4 border-bronze shadow-lg mr-6"/>
        <div>
          <h1 className="text-4xl font-victorian text-bronze mb-1 flex items-center">
            <span dangerouslySetInnerHTML={{__html: gearSVG}} />
            Bill Farmer
          </h1>
          <p className="text-sepia text-lg">VP Engineering, Product Leader, Adjunct Faculty @ UMD</p>
          <p className="text-iron text-sm">Python, Java, JavaScript, Full Stack, Cyber Threat Intelligence</p>
        </div>
        {/* Decorative gear in corner */}
        <span className="absolute top-2 right-2">{gearSVG}</span>
      </div>

      {/* Projects */}
      {categories.map(category => (
        <section key={category} className="mb-10">
          <h2 className="text-2xl font-victorian text-copper mb-4 flex items-center">
            <span dangerouslySetInnerHTML={{__html: gearSVG}} />
            {category} Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(p => p.category === category).map((proj, idx) => (
              <a key={idx} href={proj.link} className="steampunk-border block p-4 hover:shadow-2xl hover:border-copper transition bg-parchment">
                <img src={proj.image} alt={proj.title} className="w-full h-32 object-cover rounded mb-2 shadow-sm border-2 border-bronze"/>
                <h3 className="text-xl font-victorian text-bronze mb-1">{proj.title}</h3>
                <p className="text-sm text-iron mb-2">{proj.description}</p>
                {proj.tech && (
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="bg-copper text-parchment text-xs px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>
      ))}

      <footer className="mt-12 text-xs text-sepia text-center">
        <div className="flex gap-4 justify-center mb-2">
          <a href="https://github.com/bfarmerUMD" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.svg" alt="GitHub" className="w-6 h-6"/>
          </a>
          {/* Add more icons as needed */}
        </div>
        <span dangerouslySetInnerHTML={{__html: gearSVG}} /> 
        Page template inspired by <a href="https://github.com/evanca/quick-portfolio" className="underline text-copper">evanca</a>
      </footer>
    </main>
  );
}

// Simple SVG gear for decoration
const gearSVG = `
<svg class="gear" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="6" fill="#b08d57"/>
  <g stroke="#704214" stroke-width="2">
    <line x1="16" y1="2" x2="16" y2="8"/>
    <line x1="16" y1="24" x2="16" y2="30"/>
    <line x1="2" y1="16" x2="8" y2="16"/>
    <line x1="24" y1="16" x2="30" y2="16"/>
    <line x1="7" y1="7" x2="11" y2="11"/>
    <line x1="21" y1="21" x2="25" y2="25"/>
    <line x1="7" y1="25" x2="11" y2="21"/>
    <line x1="21" y1="11" x2="25" y2="7"/>
  </g>
</svg>
`;

<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap" rel="stylesheet"></link>
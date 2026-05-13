export default function Portfolio() {
  const projects = [
    {
      title: "Carona UNA",
      category: "Web App",
      description: "Aplicativo de caronas para estudantes universitários.",
    },
    {
      title: "Dashboard UX",
      category: "UI/UX",
      description: "Painel moderno com foco em experiência do usuário.",
    },
    {
      title: "Loja Online",
      category: "Frontend",
      description: "Landing page moderna para e-commerce.",
    },
  ];

  return (
    <div
  className="min-h-screen text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/foto.png')" }}
>
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-zinc-400 uppercase tracking-[0.4em] text-sm mb-4">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Olá, sou <span className="text-zinc-300">Bianca Alves</span>
          </h1>

          <p className="text-zinc-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Desenvolvendo experiências digitais modernas, bonitas e intuitivas.
          </p>

          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              Ver Projetos
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition">
              Contato
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-zinc-500 uppercase text-sm tracking-[0.3em] mb-4">
            Sobre Mim
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Criando interfaces modernas e funcionais.
          </h2>

          <p className="text-zinc-400 leading-8">
            Sou apaixonada por design, desenvolvimento web e experiências digitais.
            Gosto de criar projetos modernos com visual elegante e ótima experiência
            para o usuário.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-zinc-400 mt-2">Projetos</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">UI</h3>
              <p className="text-zinc-400 mt-2">Design moderno</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">UX</h3>
              <p className="text-zinc-400 mt-2">Experiência intuitiva</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">React</h3>
              <p className="text-zinc-400 mt-2">Frontend moderno</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Projetos
          </p>

          <h2 className="text-4xl font-bold">
            Alguns dos meus trabalhos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 hover:border-zinc-600 transition duration-300"
            >
              <span className="text-sm text-zinc-500 uppercase tracking-widest">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold mt-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-4 leading-7">
                {project.description}
              </p>

              <button className="mt-8 text-white border-b border-zinc-600 hover:border-white transition">
                Ver projeto
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Tecnologias
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "Tailwind",
              "JavaScript",
              "Figma",
              "UI Design",
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
          Contato
        </p>

        <h2 className="text-5xl font-black leading-tight">
          Vamos criar algo incrível?
        </h2>

        <p className="text-zinc-400 mt-6 text-lg">
          Entre em contato para projetos, parcerias ou freelas.
        </p>

        <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
          Falar comigo
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        © 2026 - Portfolio Mie.
      </footer>
    </div>
  );
}

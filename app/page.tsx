import Image from "next/image"
import { TechCard } from "@/components/tech-card"

const technologies = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Redux", icon: "redux" },
  { name: "Git", icon: "git" },
  { name: "VS Code", icon: "vscode" },
  { name: "Postman", icon: "postman" },
  { name: "Jira", icon: "jira" },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Dinkar Tiwari</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Full Stack Web Developer</h2>
        <p className="max-w-2xl mx-auto text-lg">
          With over 2.5 years of experience, I specialize in building robust and scalable web applications using modern
          technologies. My expertise spans both frontend and backend development, with a focus on creating efficient and
          user-friendly solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Technologies I Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <TechCard key={tech.name} name={tech.name} icon={tech.icon as any} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* You can add your top 2-4 projects here */}
          <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Yokeru</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A platform enabling operators to make thousands of calls in minutes using advanced AI technology.
            </p>
            <a href="#projects" className="text-[#9333EA] dark:text-[#A855F7] hover:underline">
              Learn more
            </a>
          </div>
          <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Trip Tava</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A flight booking application with a responsive UI and backend APIs for booking and user management.
            </p>
            <a href="#projects" className="text-[#9333EA] dark:text-[#A855F7] hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


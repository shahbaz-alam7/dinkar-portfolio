import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiPostman,
  SiJira,
} from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi"

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  html5: SiHtml5,
  css3: SiCss3,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  git: SiGit,
  vscode: BiLogoVisualStudio,
  postman: SiPostman,
  jira: SiJira,
}

interface TechCardProps {
  name: string
  icon: keyof typeof iconMap
}

export function TechCard({ icon, name }: TechCardProps) {
  const Icon = iconMap[icon]

  return (
    <div
      className={`bg-white/5 dark:bg-white/5 rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 group`}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <Icon className="w-12 h-12 text-[#9333EA] dark:text-[#A855F7] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-gray-800 dark:text-gray-300 text-sm font-medium">{name}</h3>
    </div>
  )
}


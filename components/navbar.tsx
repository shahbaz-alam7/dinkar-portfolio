"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Home, FolderKanban, Briefcase, Github, FileText } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Github", href: "https://github.com/yourusername", icon: Github },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav
      className={`bg-white/70 dark:bg-[#0a0118]/70 backdrop-blur-md fixed w-full z-10 border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800 dark:text-white">DT</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-gray-600 dark:text-gray-300 hover:text-[#9333EA] dark:hover:text-[#A855F7] px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="/Dinkar_Tiwari_Resume.pdf"
                className={`text-gray-600 dark:text-gray-300 hover:text-[#9333EA] dark:hover:text-[#A855F7] px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
                download
              >
                <FileText size={16} />
                Resume
              </a>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`ml-3 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#9333EA] dark:hover:text-[#A855F7] transition-colors duration-300`}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-600 dark:text-gray-300 hover:text-[#9333EA] dark:hover:text-[#A855F7] block px-3 py-2 text-base font-medium transition-colors duration-300`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Dinkar_Tiwari_Resume.pdf"
            className={`text-gray-600 dark:text-gray-300 hover:text-[#9333EA] dark:hover:text-[#A855F7] block px-3 py-2 text-base font-medium transition-colors duration-300`}
            download
          >
            Resume
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`w-full text-left px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#9333EA] dark:hover:text-[#A855F7] transition-colors duration-300`}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}


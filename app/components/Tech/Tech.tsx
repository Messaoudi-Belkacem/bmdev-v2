"use client";

import { Code2, Database, Smartphone, Brain, Wrench } from "lucide-react";
import { useState } from "react";

export default function Tech() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack = [
    {
      category: "DS & AI",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      techs: [
        { name: "Python", logo: "🐍" },
        { name: "Pandas", logo: "🐼" },
        { name: "NumPy", logo: "🔢" },
        { name: "scikit-learn", logo: "🤖" },
        { name: "Seaborn", logo: "📊" },
        { name: "PyTorch", logo: "🔥" },
        { name: "CNN", logo: "🧠" },
        { name: "RNN", logo: "🔄" }
      ]
    },
    {
      category: "Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      techs: [
        { name: "JavaScript", logo: "🟨" },
        { name: "TypeScript", logo: "🔷" },
        { name: "Java", logo: "☕" },
        { name: "Kotlin", logo: "🅚" },
        { name: "Python", logo: "🐍" },
        { name: "C", logo: "©️" },
        { name: "R", logo: "📈" }
      ]
    },
    {
      category: "Frontend",
      icon: Code2,
      color: "from-cyan-500 to-teal-500",
      techs: [
        { name: "React.js", logo: "⚛️" },
        { name: "HTML", logo: "🌐" },
        { name: "CSS", logo: "🎨" },
        { name: "React Query", logo: "🔄" },
        { name: "Axios", logo: "📡" },
        { name: "Shadcn UI", logo: "🎭" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      techs: [
        { name: "Spring Boot", logo: "🍃" },
        { name: "Node.js", logo: "🟢" },
        { name: "Express.js", logo: "🚂" },
        { name: "RESTful APIs", logo: "🔌" },
        { name: "JPA", logo: "💾" }
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-orange-500 to-amber-500",
      techs: [
        { name: "Android", logo: "🤖" },
        { name: "Jetpack Compose", logo: "✨" },
        { name: "Retrofit", logo: "🔄" },
        { name: "Room", logo: "💽" },
        { name: "Dagger Hilt", logo: "💉" }
      ]
    },
    {
      category: "Tools & DB",
      icon: Wrench,
      color: "from-red-500 to-rose-500",
      techs: [
        { name: "Git", logo: "📦" },
        { name: "Docker", logo: "🐳" },
        { name: "Firebase", logo: "🔥" },
        { name: "MySQL", logo: "🐬" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" }
      ]
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">Technologies I work with</p>
        </div>

        <div className="space-y-12">
          {techStack.map((section, sectionIdx) => (
            <div
              key={section.category}
              className="animate-slide-up"
              style={{ animationDelay: `${sectionIdx * 150}ms`, animationFillMode: 'backwards' }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {section.category}
                </h3>
              </div>

              {/* Tech Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {section.techs.map((tech, techIdx) => (
                  <div
                    key={tech.name}
                    className="group relative animate-scale-in"
                    style={{ animationDelay: `${sectionIdx * 150 + techIdx * 50}ms`, animationFillMode: 'backwards' }}
                    onMouseEnter={() => setHoveredTech(`${section.category}-${tech.name}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div
                      className={`
                        relative p-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-800
                        bg-white dark:bg-zinc-900
                        transition-all duration-300 ease-out
                        hover:border-transparent hover:shadow-2xl
                        hover:-translate-y-2 hover:scale-105
                        cursor-pointer
                        ${hoveredTech === `${section.category}-${tech.name}` ? 'z-10' : ''}
                      `}
                    >
                      {/* Gradient border effect on hover */}
                      <div
                        className={`
                          absolute inset-0 rounded-xl bg-gradient-to-br ${section.color}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          -z-10 blur-sm
                        `}
                      />

                      {/* Content */}
                      <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {tech.logo}
                        </div>
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                          {tech.name}
                        </span>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div
                          className={`
                            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                            -translate-x-full group-hover:translate-x-full
                            transition-transform duration-1000
                          `}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
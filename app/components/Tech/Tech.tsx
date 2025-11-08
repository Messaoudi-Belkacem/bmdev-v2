"use client";

import {Brain, Code2, Database, Smartphone, Wrench} from "lucide-react";
import {useState} from "react";
import Image from "next/image";

// Import all the SVG assets
import iconPython from "../../assets/icon-python.svg";
import iconPandas from "../../assets/icon-pandas.svg";
import iconNumpy from "../../assets/icon-numpy.svg";
import iconScikitLearn from "../../assets/scikit-learn.svg";
import iconPytorch from "../../assets/icon-pytorch.svg";
import iconJavascript from "../../assets/icon-javascript.svg";
import iconTypescript from "../../assets/icon-typescript.svg";
import iconJava from "../../assets/icon-java.svg";
import iconKotlin from "../../assets/icon-kotlin.svg";
import iconC from "../../assets/icon-c.svg";
import iconR from "../../assets/icon-r.svg";
import iconReact from "../../assets/icon-react.svg";
import iconHtml from "../../assets/icon-html.svg";
import iconCss from "../../assets/icon-css.svg";
import iconSpring from "../../assets/icon-spring.svg";
import iconNodejs from "../../assets/icon-nodejs.svg";
import iconExpress from "../../assets/icon-express.svg";
import iconAndroid from "../../assets/icon-android.svg";
import iconCompose from "../../assets/icon-compose.svg";
import iconGit from "../../assets/icon-git.svg";
import iconDocker from "../../assets/icon-docker.svg";
import iconFirebase from "../../assets/icon-firebase.svg";
import iconMysql from "../../assets/icon-mysql.svg";
import iconPostgresql from "../../assets/icon-postgressql.svg";
import iconMongodb from "../../assets/icon-mongodb.svg";
import iconSeaborn from "../../assets/icon-seaborn.svg";
import iconReactQuery from "../../assets/icon-react-query.svg";
import iconAxios from "../../assets/icon-axios.svg";
import iconShadcnUI from "../../assets/icon-shadcn-ui.svg";

export default function Tech() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack = [
    {
      category: "DS & AI",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      techs: [
        {name: "Python", logo: iconPython},
        {name: "Pandas", logo: iconPandas},
        {name: "NumPy", logo: iconNumpy},
        {name: "scikit-learn", logo: iconScikitLearn},
        {name: "Seaborn", logo: iconSeaborn},
        {name: "PyTorch", logo: iconPytorch}
      ]
    },
    {
      category: "Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      techs: [
        {name: "JavaScript", logo: iconJavascript},
        {name: "TypeScript", logo: iconTypescript},
        {name: "Java", logo: iconJava},
        {name: "Kotlin", logo: iconKotlin},
        {name: "Python", logo: iconPython},
        {name: "C", logo: iconC},
        {name: "R", logo: iconR}
      ]
    },
    {
      category: "Frontend",
      icon: Code2,
      color: "from-cyan-500 to-teal-500",
      techs: [
        {name: "React.js", logo: iconReact},
        {name: "HTML", logo: iconHtml},
        {name: "CSS", logo: iconCss},
        {name: "React Query", logo: iconReactQuery},
        {name: "Axios", logo: iconAxios},
        {name: "Shadcn UI", logo: iconShadcnUI}
      ]
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      techs: [
        {name: "Spring Boot", logo: iconSpring},
        {name: "Node.js", logo: iconNodejs},
        {name: "Express.js", logo: iconExpress}
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-orange-500 to-amber-500",
      techs: [
        {name: "Android", logo: iconAndroid},
        {name: "Jetpack Compose", logo: iconCompose},
      ]
    },
    {
      category: "Tools & DB",
      icon: Wrench,
      color: "from-red-500 to-rose-500",
      techs: [
        {name: "Git", logo: iconGit},
        {name: "Docker", logo: iconDocker},
        {name: "Firebase", logo: iconFirebase},
        {name: "MySQL", logo: iconMysql},
        {name: "PostgreSQL", logo: iconPostgresql},
        {name: "MongoDB", logo: iconMongodb}
      ]
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">Technologies I work with</p>
        </div>

        <div className="space-y-12">
          {techStack.map((section, sectionIdx) => (
            <div
              key={section.category}
              className="animate-slide-up"
              style={{animationDelay: `${sectionIdx * 150}ms`, animationFillMode: 'backwards'}}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg`}>
                  <section.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {section.category}
                </h3>
              </div>

              {/* Tech Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {section.techs.map((tech, techIdx) => (
                  <div
                    key={tech.name}
                    className="group relative animate-scale-in"
                    style={{animationDelay: `${sectionIdx * 150 + techIdx * 50}ms`, animationFillMode: 'backwards'}}
                    onMouseEnter={() => setHoveredTech(`${section.category}-${tech.name}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div
                      className={`
                        relative p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800
                        bg-white dark:bg-zinc-900
                        transition-all duration-300 ease-out
                        hover:border-transparent hover:shadow-2xl
                        hover:-translate-y-2 hover:scale-105
                        cursor-pointer
                        h-40 min-h-[10rem]
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
                      <div className="flex flex-col items-center justify-center gap-3 text-center h-full">
                        <div
                          className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {tech.logo ? (
                            <Image
                              src={tech.logo}
                              alt={`${tech.name} logo`}
                              width={80}
                              height={80}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div
                              className="w-full h-full rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                              <span className="text-3xl font-bold text-zinc-400 dark:text-zinc-600">?</span>
                            </div>
                          )}
                        </div>
                        <span
                          className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors leading-tight px-2">
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
      `}</style>
    </div>
  );
}
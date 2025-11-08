"use client";

import {Brain, Globe, Smartphone, Terminal} from "lucide-react";
import {useState} from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  status: "completed" | "in-development" | "coming-soon";
  github?: string;
  demo?: string;
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "HomeSeeker",
      description: "An Android app developed as a school project to simplify finding and managing home listings. Built with Jetpack Compose, it delivers a responsive and user-friendly interface. I independently implemented the backend using Java Spring and MySQL, focusing on efficient and scalable data management.",
      category: "Mobile",
      technologies: ["Android", "Jetpack Compose", "Java Spring", "MySQL"],
      features: [
        "User Authentication: Secure login and registration system",
        "Home Listings: Browse, search, and filter home listings",
        "Favorites: Save favorite listings for easy access",
        "Contact Sellers: Direct messaging system to communicate with sellers"
      ],
      status: "completed"
    },
    {
      title: "MoviesDB",
      description: "An Android app developed to explore modern Android tools and libraries while providing a seamless way to browse and manage movie data. Built with Jetpack Compose, the app features a modern, declarative UI and leverages Dagger Hilt for dependency injection, Retrofit and OkHttp for API interactions.",
      category: "Mobile",
      technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "Dagger Hilt", "Coil", "Paging 3"],
      features: [
        "Browse and search latest movies from TMDB",
        "Paging and smooth scrolling with remote data",
        "Favorites and local caching with Room",
        "Preferences persisted with DataStore"
      ],
      status: "completed"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Built with Next.js 15 and TypeScript, featuring smooth animations and an intuitive user experience.",
      category: "Web",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      features: [
        "Responsive design across all devices",
        "Dark mode support",
        "Smooth animations and transitions",
        "Optimized performance with Next.js"
      ],
      status: "in-development"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern features including product management, shopping cart, and secure payment processing.",
      category: "Web",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [],
      status: "coming-soon"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "A machine learning powered dashboard for data visualization and predictive analytics using Python and modern ML libraries.",
      category: "AI & Data Science",
      technologies: ["Python", "PyTorch", "Pandas", "scikit-learn"],
      features: [],
      status: "coming-soon"
    },
    {
      title: "Automation Scripts",
      description: "Collection of automation scripts for workflow optimization, data processing, and system management tasks.",
      category: "Scripts",
      technologies: ["Python", "Bash", "Node.js"],
      features: [],
      status: "coming-soon"
    }
  ];

  const categoryIcons = {
    Mobile: Smartphone,
    Web: Globe,
    "AI & Data Science": Brain,
    Scripts: Terminal
  };

  const categoryColors = {
    Mobile: "from-orange-500 to-amber-500",
    Web: "from-blue-500 to-cyan-500",
    "AI & Data Science": "from-purple-500 to-pink-500",
    Scripts: "from-green-500 to-emerald-500"
  };

  const statusBadges = {
    completed: {text: "Completed", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"},
    "in-development": {
      text: "In Development",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    },
    "coming-soon": {text: "Coming Soon", color: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"}
  };

  // Group projects by category
  const categories = ["Mobile", "Web", "AI & Data Science", "Scripts"];
  const projectsByCategory = categories.map(category => ({
    category,
    projects: projects.filter(p => p.category === category)
  })).filter(group => group.projects.length > 0);

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">A showcase of my work and experiments</p>
        </div>

        {/* Projects by Category */}
        <div className="space-y-12">
          {projectsByCategory.map((group, groupIdx) => {
            const Icon = categoryIcons[group.category as keyof typeof categoryIcons];
            const color = categoryColors[group.category as keyof typeof categoryColors];

            return (
              <div
                key={group.category}
                className="animate-slide-up"
                style={{ animationDelay: `${groupIdx * 150}ms`, animationFillMode: 'backwards' }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {group.category}
                  </h3>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.projects.map((project, idx) => {
                    const isExpanded = expandedProject === project.title;

                    return (
                      <div
                        key={project.title}
                        className="group relative animate-scale-in"
                        style={{ animationDelay: `${groupIdx * 150 + idx * 100}ms`, animationFillMode: 'backwards' }}
                      >
                        <div
                          className={`
                            relative p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800
                            bg-white dark:bg-zinc-900
                            transition-all duration-300 ease-out
                            hover:border-transparent hover:shadow-2xl
                            hover:-translate-y-1
                            cursor-pointer
                            ${isExpanded ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}
                          `}
                          onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                        >
                          {/* Gradient border effect on hover */}
                          <div
                            className={`
                              absolute inset-0 rounded-xl bg-gradient-to-br ${color}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              -z-10 blur-sm
                            `}
                          />

                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <h3
                              className="font-bold text-xl text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                          </div>

                          {/* Status Badge */}
                          <div className="mb-4">
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-medium ${statusBadges[project.status].color}`}>
                              {statusBadges[project.status].text}
                            </span>
                          </div>

                          {/* Description */}
                          <p className={`text-sm text-zinc-600 dark:text-zinc-400 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, isExpanded ? undefined : 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                                >
                                  {tech}
                                </span>
                              ))}
                              {!isExpanded && project.technologies.length > 4 && (
                                <span
                                  className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                                  +{project.technologies.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Expanded Features */}
                          {isExpanded && project.features.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in">
                              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Key Features:</h4>
                              <ul className="space-y-2">
                                {project.features.map((feature, i) => (
                                  <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Coming Soon Overlay */}
                          {project.status === "coming-soon" && (
                            <div
                              className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-100/5 backdrop-blur-[2px] rounded-xl flex items-center justify-center pointer-events-none">
                              <div className="text-center">
                                <div className="text-4xl mb-2">🚧</div>
                                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Coming Soon</p>
                              </div>
                            </div>
                          )}

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
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
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Click to expand hint */}
        <div className="text-center mt-8 animate-fade-in"
             style={{animationDelay: '600ms', animationFillMode: 'backwards'}}>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            💡 Click on any project card to view more details
          </p>
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
                  transform: scale(0.9);
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
              animation: scale-in 0.5s ease-out;
          }

          .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
          }
      `}</style>
    </div>
  );
}

/*
* # HomeSeeker
* Home Seeker is an Android app developed as a school project to simplify finding and managing home
* listings. Built with Jetpack Compose, it delivers a responsive and user-friendly interface. I independently
* implemented the backend using Java Spring and MySQL, focusing on efficient and scalable data
* management. This project allowed me to enhance my technical skills by exploring modern technologies
* and combining intuitive design with robust functionality.
* ## Technologies Used
* - Android Development with Jetpack Compose
* - Backend Development with Java Spring
* - Database Management with MySQL
* ## Features
* - User Authentication: Secure login and registration system.
* - Home Listings: Browse, search, and filter home listings.
* - Favorites: Save favorite listings for easy access.
* - Contact Sellers: Direct messaging system to communicate with sellers.
*/

/*
* # MoviesDB
* MoviesDB is an Android app developed to explore modern Android tools and libraries while
* providing a seamless way to browse and manage movie data. Built with Jetpack Compose, the app
* features a modern, declarative UI and leverages Dagger Hilt for dependency injection,
* Retrofit and OkHttp for API interactions, and Coil for fast image loading. Paging 3 enables
* smooth pagination from the TMDB API, while Room and DataStore handle local and preference data.
* Lottie animations and ConstraintLayout Compose add dynamic visuals and complex layouts,
* resulting in a polished and responsive user experience. This project helped deepen skills with
* contemporary Android tooling and address challenges such as TMDB API rate limits and pagination.
* ## Technologies Used
* - Kotlin
* - Jetpack Compose
* - Retrofit \& OkHttp
* - Room
* - Dagger Hilt
* - Coil
* - Paging 3
* - DataStore
* - Lottie Animations
* - ConstraintLayout Compose
* ## Features
* - Browse and search latest movies from TMDB.
* - Paging and smooth scrolling with remote data.
* - Favorites and local caching with Room.
* - Preferences persisted with DataStore.
*/
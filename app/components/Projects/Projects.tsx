"use client";

import {Brain, ChevronLeft, ChevronRight, Globe, Smartphone, Terminal} from "lucide-react";
import {useState} from "react";
import Image, {type StaticImageData} from "next/image";
import projectsData from "../../data/projects.json";

// Import static images for projects that use them
import unipathLogo from "../../assets/logo-unipath.svg";
import unipathImage from "../../assets/pictures/unipath-image.png";
import homeSeekerLogo from "../../assets/logo-home-seeker.svg";
import homeseekerImage from "../../assets/pictures/home-seeker-image.png";
import moviesBDLogo from "../../assets/logo-moviesdb.svg";
import moviesDBImage from "../../assets/pictures/moviesdb-image.png";
import dalailTarbawiyyaLogo from "../../assets/logo-dalail-tarbawiyya.svg";
import dalailTarbawiyyaImage from "../../assets/pictures/dalail-tarbawiyya-image.png";
import youstockLogo from "../../assets/logo-youstock-mobile.svg";
import youstockImage from "../../assets/pictures/youstock-mobile-image.png";
import myPdfSummarizerImage from "../../assets/pictures/my-pdf-summarizer-image.png";
import myPdfSummarizerLogo from "../../assets/logo-my-pdf-summarizer.svg";
import quizlyLogo from "../../assets/logo-quizly.svg";
import quizlyImage from "../../assets/pictures/quizly-image.png";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  status: "completed" | "in-development" | "coming-soon";
  image?: string | StaticImageData;
  icon?: string | StaticImageData;
  github?: string | null;
  demo?: string | null;
  date: string;
  featured: boolean;
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({
    "Mobile": 0,
    "Web": 0,
    "AI & Data Science": 0,
    "Scripts": 0
  });

  // Map to resolve static image imports
  const imageMap: Record<string, StaticImageData> = {
    "/assets/pictures/unipath-image.png": unipathImage,
    "/assets/logo-unipath.svg": unipathLogo,
    "/assets/pictures/home-seeker-image.png": homeseekerImage,
    "/assets/logo-home-seeker.svg": homeSeekerLogo,
    "/assets/pictures/moviesdb-image.png": moviesDBImage,
    "/assets/logo-moviesdb.svg": moviesBDLogo,
    "/assets/pictures/dalail-tarbawiyya-image.png": dalailTarbawiyyaImage,
    "/assets/logo-dalail-tarbawiyya.svg": dalailTarbawiyyaLogo,
    "/assets/pictures/youstock-mobile-image.png": youstockImage,
    "/assets/logo-youstock-mobile.svg": youstockLogo,
    "/assets/pictures/my-pdf-summarizer-image.png": myPdfSummarizerImage,
    "/assets/logo-my-pdf-summarizer.svg": myPdfSummarizerLogo,
    "/assets/pictures/quizly-image.png": quizlyImage,
    "/assets/logo-quizly.svg": quizlyLogo
  };

  // Transform JSON data to use static imports where available
  const projects: Project[] = projectsData.map((project) => ({
    ...project,
    status: project.status as "completed" | "in-development" | "coming-soon",
    image: project.image && imageMap[project.image] ? imageMap[project.image] : project.image,
    icon: project.icon && imageMap[project.icon] ? imageMap[project.icon] : project.icon,
  }));

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

  const nextSlide = (category: string) => {
    const group = projectsByCategory.find(g => g.category === category);
    if (group) {
      setCarouselIndexes(prev => ({
        ...prev,
        [category]: (prev[category] + 1) % group.projects.length
      }));
    }
  };

  const prevSlide = (category: string) => {
    const group = projectsByCategory.find(g => g.category === category);
    if (group) {
      setCarouselIndexes(prev => ({
        ...prev,
        [category]: prev[category] === 0 ? group.projects.length - 1 : prev[category] - 1
      }));
    }
  };

  const goToSlide = (category: string, index: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [category]: index
    }));
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className="text-4xl font-bold mb-3 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
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
                style={{animationDelay: `${groupIdx * 150}ms`, animationFillMode: 'backwards'}}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-linear-to-br ${color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white"/>
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {group.category}
                  </h3>
                </div>

                {/* Projects Carousel */}
                <div className="relative">
                  {/* Carousel Container */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{
                        transform: `translateX(-${carouselIndexes[group.category] * 100}%)`
                      }}
                    >
                      {group.projects.map((project) => {
                        const isExpanded = expandedProject === project.title;

                        return (
                          <div
                            key={project.title}
                            className="w-full shrink-0 px-2"
                          >
                            <div className="group relative animate-scale-in max-w-3xl mx-auto">
                              <div
                                className={`
                                  relative rounded-xl border-2 border-zinc-200 dark:border-zinc-800
                                  bg-white dark:bg-zinc-900
                                  transition-all duration-300 ease-out
                                  hover:border-transparent hover:shadow-2xl
                                  hover:-translate-y-1
                                  overflow-hidden
                                  ${isExpanded ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}
                                `}
                              >
                                {/* Gradient border effect on hover */}
                                <div
                                  className={`
                                    absolute inset-0 rounded-xl bg-linear-to-br ${color}
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    -z-10 blur-sm
                                  `}
                                />

                                {/* Project Image with Icon Hover Effect */}
                                <div
                                  className="relative h-64 w-full bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                                  {project.image && typeof project.image !== 'string' || (typeof project.image === 'string' && !project.image.startsWith('/projects/')) ? (
                                    <>
                                      {/* Background Image - Blurred by default, unblurs on hover */}
                                      <Image
                                        src={project.image!}
                                        alt={`${project.title} screenshot`}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105 blur-md group-hover:blur-none"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      />

                                      {/* Icon Overlay - Visible by default, sweeps away on hover */}
                                      {project.icon && (typeof project.icon !== 'string' || !project.icon.startsWith('/projects/')) && (
                                        <div
                                          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/0 transition-all duration-500">
                                          <div
                                            className="relative w-32 h-32 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0">
                                            <Image
                                              src={project.icon}
                                              alt={`${project.title} icon`}
                                              fill
                                              className="object-contain drop-shadow-2xl"
                                              sizes="128px"
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    /* Placeholder for missing images */
                                    <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-10 dark:opacity-20`}>
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                          <Icon className="w-24 h-24 mx-auto text-zinc-400 dark:text-zinc-600 mb-4" />
                                          <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium">
                                            {project.title}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Coming Soon Overlay */}
                                  {project.status === "coming-soon" && (
                                    <div className="absolute inset-0 bg-zinc-900/40 dark:bg-zinc-950/60"/>
                                  )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                  {/* Header */}
                                  <div className="flex items-start justify-between mb-4">
                                    <h3
                                      className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
                                  <p
                                    className={`text-sm text-zinc-600 dark:text-zinc-400 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}
                                    onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                                  >
                                    {project.description}
                                  </p>

                                  {/* Read More Button */}
                                  {!isExpanded && project.description.length > 150 && (
                                    <button
                                      onClick={() => setExpandedProject(project.title)}
                                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
                                    >
                                      Read more...
                                    </button>
                                  )}

                                  {/* Technologies */}
                                  <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                      {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech) => (
                                        <span
                                          key={tech}
                                          className="text-xs px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                      {!isExpanded && project.technologies.length > 6 && (
                                        <span
                                          className="text-xs px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                                          +{project.technologies.length - 6} more
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Expanded Features */}
                                  {isExpanded && project.features.length > 0 && (
                                    <div
                                      className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in">
                                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                                        Key Features:
                                      </h4>
                                      <ul className="space-y-2">
                                        {project.features.map((feature, i) => (
                                          <li key={i}
                                              className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                                            <span className="text-blue-500 mt-0.5 text-lg">•</span>
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {/* Collapse Button */}
                                  {isExpanded && (
                                    <button
                                      onClick={() => setExpandedProject(null)}
                                      className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                      Show less
                                    </button>
                                  )}
                                </div>

                                {/* Coming Soon Overlay */}
                                {project.status === "coming-soon" && (
                                  <div
                                    className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-100/5 backdrop-blur-[1px] rounded-xl flex items-center justify-center pointer-events-none">
                                    <div className="text-center bg-white/90 dark:bg-zinc-900/90 px-6 py-4 rounded-xl">
                                      <div className="text-5xl mb-2">🚧</div>
                                      <p className="text-lg font-bold text-zinc-700 dark:text-zinc-300">Coming Soon
                                      </p>
                                    </div>
                                  </div>
                                )}

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                                  <div
                                    className={`
                                      absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent
                                      -translate-x-full group-hover:translate-x-full
                                      transition-transform duration-1000
                                    `}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  {group.projects.length > 1 && (
                    <>
                      <button
                        onClick={() => prevSlide(group.category)}
                        className={`
                          absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                          p-3 rounded-full bg-white dark:bg-zinc-800 
                          border-2 border-zinc-200 dark:border-zinc-700
                          shadow-lg hover:shadow-xl
                          transition-all duration-300
                          hover:scale-110 hover:bg-linear-to-br hover:${color}
                          hover:border-transparent hover:text-white
                          z-10
                          group/btn
                        `}
                        aria-label="Previous project"
                      >
                        <ChevronLeft
                          className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover/btn:text-white"/>
                      </button>
                      <button
                        onClick={() => nextSlide(group.category)}
                        className={`
                          absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                          p-3 rounded-full bg-white dark:bg-zinc-800 
                          border-2 border-zinc-200 dark:border-zinc-700
                          shadow-lg hover:shadow-xl
                          transition-all duration-300
                          hover:scale-110 hover:bg-linear-to-br hover:${color}
                          hover:border-transparent hover:text-white
                          z-10
                          group/btn
                        `}
                        aria-label="Next project"
                      >
                        <ChevronRight
                          className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover/btn:text-white"/>
                      </button>
                    </>
                  )}

                  {/* Dots Indicator */}
                  {group.projects.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {group.projects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToSlide(group.category, idx)}
                          className={`
                            h-2 rounded-full transition-all duration-300
                            ${carouselIndexes[group.category] === idx
                            ? `w-8 bg-linear-to-r ${color}`
                            : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
                          }
                          `}
                          aria-label={`Go to project ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-8 animate-fade-in"
             style={{animationDelay: '600ms', animationFillMode: 'backwards'}}>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            💡 Use arrows to navigate between projects • Click &ldquo;Read more&rdquo; to view full details
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

      `}</style>
    </div>
  );
}
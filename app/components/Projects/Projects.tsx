"use client";

import {Brain, ChevronLeft, ChevronRight, Globe, Smartphone, Terminal} from "lucide-react";
import {useState} from "react";
import {type StaticImageData} from "next/image";
import projectsData from "../../data/projects.json";
import ProjectItem from "./ProjectItem";

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
                      {group.projects.map((project) => (
                        <ProjectItem
                          key={project.title}
                          project={project}
                          isExpanded={expandedProject === project.title}
                          onToggleExpand={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                          color={color}
                          Icon={Icon}
                        />
                      ))}
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
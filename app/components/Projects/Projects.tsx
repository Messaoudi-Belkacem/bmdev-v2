"use client";

import {Brain, ChevronLeft, ChevronRight, Globe, Smartphone, Terminal} from "lucide-react";
import {useState} from "react";
import {type StaticImageData} from "next/image";
import {motion} from "framer-motion";
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
                      <motion.button
                        onClick={() => prevSlide(group.category)}
                        className="
                          absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                          p-3 rounded-full
                          bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm
                          border-2 border-zinc-300 dark:border-zinc-600
                          shadow-lg
                          disabled:opacity-50 disabled:cursor-not-allowed
                          z-20
                        "
                        whileHover={{
                          scale: 1.1,
                          borderColor: 'rgb(59, 130, 246)',
                          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        aria-label="Previous project"
                      >
                        <motion.div
                          whileHover={{ x: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronLeft className="w-6 h-6 text-zinc-700 dark:text-zinc-300"/>
                        </motion.div>
                      </motion.button>
                      <motion.button
                        onClick={() => nextSlide(group.category)}
                        className="
                          absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                          p-3 rounded-full
                          bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm
                          border-2 border-zinc-300 dark:border-zinc-600
                          shadow-lg
                          disabled:opacity-50 disabled:cursor-not-allowed
                          z-20
                        "
                        whileHover={{
                          scale: 1.1,
                          borderColor: 'rgb(59, 130, 246)',
                          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        aria-label="Next project"
                      >
                        <motion.div
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-6 h-6 text-zinc-700 dark:text-zinc-300"/>
                        </motion.div>
                      </motion.button>
                    </>
                  )}

                  {/* Dots Indicator */}
                  {group.projects.length > 1 && (
                    <motion.div
                      className="flex justify-center items-center gap-2 mt-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {group.projects.map((_, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => goToSlide(group.category, idx)}
                          className="relative rounded-full overflow-hidden"
                          whileHover={{ scale: 1.25 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Go to project ${idx + 1}`}
                          aria-current={carouselIndexes[group.category] === idx ? 'true' : 'false'}
                        >
                          <motion.div
                            className="rounded-full"
                            initial={false}
                            animate={{
                              width: carouselIndexes[group.category] === idx ? 32 : 10,
                              height: 10,
                              backgroundColor: carouselIndexes[group.category] === idx
                                ? 'rgb(37, 99, 235)'
                                : 'rgb(212, 212, 216)'
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }}
                          />
                          {carouselIndexes[group.category] === idx && (
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                              }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
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
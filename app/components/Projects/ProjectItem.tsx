import Image, { type StaticImageData } from "next/image";

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

interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const statusBadges = {
  completed: { text: "Completed", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  "in-development": {
    text: "In Development",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
  },
  "coming-soon": { text: "Coming Soon", color: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400" }
};

export default function ProjectItem({ project, isExpanded, onToggleExpand, color, Icon }: ProjectItemProps) {
  return (
    <div className="w-full shrink-0 px-2">
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
          <div className="relative h-64 w-full bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/0 transition-all duration-500">
                    <div className="relative w-32 h-32 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0">
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
              <div className="absolute inset-0 bg-zinc-900/40 dark:bg-zinc-950/60" />
            )}
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusBadges[project.status].color}`}>
                {statusBadges[project.status].text}
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-sm text-zinc-600 dark:text-zinc-400 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}
              onClick={onToggleExpand}
            >
              {project.description}
            </p>

            {/* Read More Button */}
            {!isExpanded && project.description.length > 150 && (
              <button
                onClick={onToggleExpand}
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
                  <span className="text-xs px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Expanded Features */}
            {isExpanded && project.features.length > 0 && (
              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
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
                onClick={onToggleExpand}
                className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Show less
              </button>
            )}
          </div>

          {/* Coming Soon Overlay */}
          {project.status === "coming-soon" && (
            <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-100/5 backdrop-blur-[1px] rounded-xl flex items-center justify-center pointer-events-none">
              <div className="text-center bg-white/90 dark:bg-zinc-900/90 px-6 py-4 rounded-xl">
                <div className="text-5xl mb-2">🚧</div>
                <p className="text-lg font-bold text-zinc-700 dark:text-zinc-300">Coming Soon</p>
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
}


import { Code2, Database, Smartphone, Brain, Wrench } from "lucide-react";

export default function Tech() {
  const techStack = [
    {
      category: "DS & AI",
      icon: Brain,
      skills: ["Pandas", "NumPy", "scikit-learn", "Seaborn", "PyTorch", "CNN", "RNN"]
    },
    {
      category: "Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "Java", "Kotlin", "Python", "C", "R"]
    },
    {
      category: "Frontend",
      icon: Code2,
      skills: ["React.js", "HTML", "CSS", "React Query", "Axios", "Shadcn UI"]
    },
    {
      category: "Backend",
      icon: Database,
      skills: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "JPA"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["Android", "Jetpack Compose", "Retrofit", "Room", "Dagger Hilt"]
    },
    {
      category: "Tools & DB",
      icon: Wrench,
      skills: ["Git", "Docker", "Firebase", "MySQL", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, idx) => (
          <div
            key={tech.category}
            className="group p-4 border rounded-lg bg-white dark:bg-zinc-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <tech.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{tech.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
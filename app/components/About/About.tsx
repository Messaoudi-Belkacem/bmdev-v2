"use client";

import { Code2, Smartphone, Brain, Rocket, BookOpen } from "lucide-react";

export default function About() {
	return (
		<section id="about" className="relative py-20 px-4 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
				<div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
			</div>

			<div className="max-w-4xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						About Me
					</h2>
					<div className="w-20 h-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
				</div>

				{/* Main Content */}
				<div className="space-y-8">
					{/* Introduction */}
					<div className="text-center">
						<p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
							I&apos;m <span className="font-bold text-zinc-900 dark:text-zinc-100">Belkacem</span>, an Android & Full Stack Developer and an AI/DS student.
							I build and imagine the tools of tomorrow.
						</p>
					</div>

					{/* What I Do Section */}
					<div className="mt-12">
						<div className="flex items-center gap-2 mb-6">
							<Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							<h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
								What I Do
							</h3>
						</div>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
								<div className="w-12 h-12 rounded-lg bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<Smartphone className="w-6 h-6 text-white" />
								</div>
								<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
									<span className="font-semibold text-zinc-900 dark:text-zinc-100">Develop</span> full-featured Android apps with <span className="font-medium">Kotlin, Jetpack Compose, and Spring Boot</span>.
								</p>
							</div>

							<div className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
								<div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<Code2 className="w-6 h-6 text-white" />
								</div>
								<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
									<span className="font-semibold text-zinc-900 dark:text-zinc-100">Engineer</span> full-stack web applications using the <span className="font-medium">React and Node.js/Spring Boot</span> ecosystems.
								</p>
							</div>

							<div className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
								<div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<Brain className="w-6 h-6 text-white" />
								</div>
								<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
									<span className="font-semibold text-zinc-900 dark:text-zinc-100">Design, train, and evaluate</span> machine learning models for prediction and computer vision tasks with <span className="font-medium">Python, PyTorch, and scikit-learn</span>.
								</p>
							</div>
						</div>
					</div>

					{/* My Approach Section */}
					<div className="mt-12 p-8 rounded-2xl bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800/50 dark:to-zinc-800/30 border border-zinc-200 dark:border-zinc-700">
						<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
							🚀 My Approach
						</h3>
						<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
							I focus on creating <span className="font-medium text-zinc-900 dark:text-zinc-100">clean, maintainable architectures</span> and <span className="font-medium text-zinc-900 dark:text-zinc-100">intuitive user experiences</span>.
							I&apos;m driven by the challenge of turning complex problems into simple, elegant solutions—whether it&apos;s a smooth UI, a robust API, or an accurate predictive model.
						</p>
					</div>

					{/* Currently Section */}
					<div className="mt-8 p-8 rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
						<div className="flex items-center gap-2 mb-4">
							<BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
								Currently
							</h3>
						</div>
						<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
							Deepening my expertise in <span className="font-medium text-zinc-900 dark:text-zinc-100">Deep Learning</span> and <span className="font-medium text-zinc-900 dark:text-zinc-100">Cloud Engineering</span> while
							completing my final year as a Computer Science student. Actively looking for roles or projects that challenge me to grow at the nexus of <span className="font-semibold text-blue-600 dark:text-blue-400">development and data science</span>.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}


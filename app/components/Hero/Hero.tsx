"use client";

import { ArrowDown, Mail, Code2, Smartphone, Brain } from "lucide-react";
import { useState, useEffect } from "react";
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Hero() {
	const [currentRole, setCurrentRole] = useState(0);

	const roles = [
		{ text: "Full-Stack Developer", icon: Code2, color: "from-blue-500 to-cyan-500" },
		{ text: "Mobile Developer", icon: Smartphone, color: "from-orange-500 to-amber-500" },
		{ text: "Data Science Enthusiast", icon: Brain, color: "from-purple-500 to-pink-500" }
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRole((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [roles.length]);
	
	return (
		<div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				{/* Gradient Orbs */}
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
			</div>

			<div className="max-w-5xl mx-auto text-center relative">
				{/* Greeting */}
				<div className="mb-6 animate-fade-in-down">
					<span className="inline-block px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium border border-zinc-200 dark:border-zinc-700">
						👋 Welcome to my portfolio
					</span>
				</div>

				{/* Main Heading */}
				<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
					<span className="text-zinc-900 dark:text-zinc-100">Hi, I&#39;m </span>
					<span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
						Belkacem Messaoudi
					</span>
				</h1>

				{/* Rotating Role */}
				<div className="mb-8 h-20 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
					<div className="relative">
						{roles.map((role, idx) => (
							<div
								key={role.text}
								className={`flex items-center gap-3 transition-all duration-500 ${
									currentRole === idx
										? 'opacity-100 translate-y-0'
										: 'opacity-0 absolute inset-0 translate-y-4'
								}`}
							>
								<div className={`p-2 rounded-lg bg-linear-to-br ${role.color} shadow-lg`}>
									<role.icon className="w-6 h-6 text-white" />
								</div>
								<p className="text-2xl sm:text-3xl font-semibold text-zinc-700 dark:text-zinc-300">
									{role.text}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Description */}
				<p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
					I build <span className="font-semibold text-zinc-900 dark:text-zinc-100">mobile apps</span>,
					<span className="font-semibold text-zinc-900 dark:text-zinc-100"> web applications</span>, and explore
					<span className="font-semibold text-zinc-900 dark:text-zinc-100"> data science</span>.
					Passionate about creating intuitive, scalable, and impactful solutions.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
					<a
						href="#projects"
						className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
					>
						<span className="relative z-10 flex items-center gap-2">
							View Projects
							<ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
						</span>
						<div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
					</a>

					<a
						href="#contact"
						className="px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold rounded-xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
					>
						Get in Touch
					</a>
				</div>

				{/* Social Links */}
				<div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
					<a
						href="https://github.com/Messaoudi-Belkacem"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
						aria-label="GitHub"
					>
						<SiGithub className="w-5 h-5" />
					</a>
					<a
						href="https://www.linkedin.com/in/belkacem-messaoudi-a95591230/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
						aria-label="LinkedIn"
					>
						<SiLinkedin className="w-5 h-5" />
					</a>
					<a
						href="mailto:wailmessaoudi806@gmail.com"
						className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
						aria-label="Email"
					>
						<Mail className="w-5 h-5" />
					</a>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<div className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600">
						<span className="text-xs font-medium">Scroll to explore</span>
						<ArrowDown className="w-4 h-4" />
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes fade-in-down {
					from {
						opacity: 0;
						transform: translateY(-20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes fade-in-up {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes pulse-slow {
					0%, 100% {
						opacity: 0.5;
						transform: scale(1);
					}
					50% {
						opacity: 0.8;
						transform: scale(1.05);
					}
				}

				@keyframes gradient {
					0%, 100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}

			`}</style>
		</div>
	);
}
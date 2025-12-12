'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Clock } from 'lucide-react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: 'Job Opportunity',
		message: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<section id="contact" className="relative py-20 px-4 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
						Let&apos;s Build the Next Intelligent Interface
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
						Have a project in mind or looking to collaborate? I&apos;d love to hear from you. 
						Drop me a message and let&apos;s create something amazing together.
					</p>
				</div>

				{/* Two Column Layout */}
				<div className="grid md:grid-cols-2 gap-12">
					{/* Left Column - Contact Info & Social Links */}
					<div className="space-y-8">
						{/* Social Links */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
								Connect With Me
							</h3>
							
							<a 
								href="mailto:your.email@example.com" 
								className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
							>
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<Mail className="w-6 h-6 text-white" />
								</div>
								<div>
									<p className="font-medium text-zinc-900 dark:text-zinc-100">Email</p>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">your.email@example.com</p>
								</div>
							</a>

							<a 
								href="https://linkedin.com/in/yourprofile" 
								target="_blank" 
								rel="noopener noreferrer"
								className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10"
							>
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<Linkedin className="w-6 h-6 text-white" />
								</div>
								<div>
									<p className="font-medium text-zinc-900 dark:text-zinc-100">LinkedIn</p>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">Connect professionally</p>
								</div>
							</a>

							<a 
								href="https://github.com/yourusername" 
								target="_blank" 
								rel="noopener noreferrer"
								className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
							>
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<Github className="w-6 h-6 text-white" />
								</div>
								<div>
									<p className="font-medium text-zinc-900 dark:text-zinc-100">GitHub</p>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">Check out my code</p>
								</div>
							</a>
						</div>

						{/* Additional Info */}
						<div className="p-6 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800/50 dark:to-zinc-800/30 border border-zinc-200 dark:border-zinc-700 space-y-3">
							<div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
								<MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								<span>Batna, Algeria</span>
							</div>
							<div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
								<Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
								<span>CET Timezone</span>
							</div>
							<p className="text-sm text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-700">
								💬 I typically respond within 24-48 hours
							</p>
						</div>
					</div>

					{/* Right Column - Contact Form */}
					<div className="p-8 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 shadow-xl">
						<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
							Send Me a Message
						</h3>
						
						<form onSubmit={handleSubmit} className="space-y-5">
							{/* Name Field */}
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
									placeholder="John Doe"
								/>
							</div>

							{/* Email Field */}
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
									placeholder="john@example.com"
								/>
							</div>

							{/* Subject Dropdown */}
							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Subject
								</label>
								<select
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
								>
									<option value="Job Opportunity">Job Opportunity</option>
									<option value="Freelance Project">Freelance Project</option>
									<option value="Collaboration">Collaboration</option>
									<option value="Other">Other</option>
								</select>
							</div>

							{/* Message Field */}
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
									placeholder="Tell me about your project or opportunity..."
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
							>
								<Send className="w-5 h-5" />
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
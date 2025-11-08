// Minimal Hero component
export default function Hero() {
	return (
		<div className="py-12">
			<h1 className="text-4xl font-bold">Hi, I’m Belkacem Messaoudi.</h1>
			<p className="mt-3 text-zinc-600 dark:text-zinc-400">I build web apps & interfaces with React and TypeScript.</p>
			<a href="#projects" className="inline-block mt-6 px-4 py-2 bg-zinc-900 text-white rounded">See projects</a>
		</div>
	);
}
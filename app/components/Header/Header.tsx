// Add a minimal Header component to avoid import errors
export default function Header() {
	return (
		<header className="w-full border-b border-zinc-200 dark:border-zinc-800">
			<div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
				<div className="text-lg font-semibold">Your Name</div>
				<nav className="space-x-4 text-sm">
					<a href="#home" className="hover:underline">Home</a>
					<a href="#projects" className="hover:underline">Projects</a>
					<a href="#about" className="hover:underline">About</a>
					<a href="#contact" className="hover:underline">Contact</a>
				</nav>
			</div>
		</header>
	);
}


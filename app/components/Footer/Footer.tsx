// Minimal Footer component
export default function Footer() {
	return (
		<footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
			<div className="max-w-3xl mx-auto px-6 py-6 text-sm text-zinc-600 dark:text-zinc-400">
				© {new Date().getFullYear()} Your Name — Built with Next.js
			</div>
		</footer>
	);
}


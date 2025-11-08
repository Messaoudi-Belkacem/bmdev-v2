// Minimal Projects component
export default function Projects() {
	return (
		<div className="py-6">
			<h2 className="text-2xl font-semibold mb-4">Projects</h2>
			<ul className="grid gap-4 sm:grid-cols-2">
				<li className="p-4 border rounded bg-white dark:bg-zinc-900">
					<h3 className="font-medium">Project One</h3>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Short blurb about the project.</p>
				</li>
				<li className="p-4 border rounded bg-white dark:bg-zinc-900">
					<h3 className="font-medium">Project Two</h3>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Short blurb about the project.</p>
				</li>
			</ul>
		</div>
	);
}


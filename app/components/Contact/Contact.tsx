// Minimal Contact component
export default function Contact() {
	return (
		<div className="py-6">
			<h2 className="text-2xl font-semibold mb-4">Contact</h2>
			<p className="text-zinc-600 dark:text-zinc-400 mb-4">Interested in working together? Send me a message.</p>
			<form className="space-y-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
				<input className="w-full p-2 border rounded bg-white dark:bg-zinc-900" placeholder="Your name" />
				<input className="w-full p-2 border rounded bg-white dark:bg-zinc-900" placeholder="Your email" />
				<textarea className="w-full p-2 border rounded bg-white dark:bg-zinc-900" rows={4} placeholder="Message" />
				<button type="submit" className="px-4 py-2 bg-zinc-900 text-white rounded">Send</button>
			</form>
		</div>
	);
}


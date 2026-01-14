import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { Search } from 'lucide-react';
import { fetchGithubUser } from '@/lib/github-api';

const testGitHubAPI = createServerFn().handler(async () => {
	const user = await fetchGithubUser('torvalds');
	console.log('Github user test works!', user);
	return user;
});

export const Route = createFileRoute('/')({
	loader: async () => {
		const user = await testGitHubAPI();
		return { user };
	},
	component: HomePage,
});

function HomePage() {
	const { user } = Route.useLoaderData();

	console.log('User data:', user);
	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto px-4 py-16">
				<div className="max-w-2xl mx-auto text-center space-y-8">
					<div className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-bold text-foreground">
							GitHub Profile Viewer
						</h1>
						<p className="text-lg text-muted-foreground">
							Search for any GitHub user to view their profile, repositories,
							and statistics
						</p>
					</div>

					<div className="flex items-center gap-2 p-4 border border-border rounded-lg bg-card">
						<Search className="w-5 h-5 text-muted-foreground" />
						<input
							type="text"
							placeholder="Enter GitHub username..."
							className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
						/>
					</div>

					<p className="text-sm text-muted-foreground">
						Try searching for: <span className="font-mono">torvalds</span>,{' '}
						<span className="font-mono">gaearon</span>, or{' '}
						<span className="font-mono">tj</span>
					</p>
				</div>
			</main>
		</div>
	);
}

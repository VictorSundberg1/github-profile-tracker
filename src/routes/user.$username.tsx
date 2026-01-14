import { fetchGithubUser } from '@/lib/github-api';
import { createFileRoute } from '@tanstack/react-router';
import type { GitHubUser } from '@/lib/types';

export const Route = createFileRoute('/user/$username')({
	loader: async ({ params }) => {
		const user: GitHubUser = await fetchGithubUser(params.username);
		return { user };
	},
	component: UserPage,
});

function UserPage() {
	const { user } = Route.useLoaderData();

	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto px-3 py-8">
				<h1 className="text-2xl font-bold mb-4">User Profile</h1>
				<div className="bg-card p-4 rounded-lg">
					<pre className="text-sm overflow-auto">
						{JSON.stringify(user, null, 2)}
					</pre>
				</div>
			</main>
		</div>
	);
}

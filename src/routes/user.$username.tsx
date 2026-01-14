import { fetchGithubUser } from '@/lib/github-api';
import { createFileRoute } from '@tanstack/react-router';
import type { GitHubUser } from '@/lib/types';
import { UserProfile } from '@/components/UserProfile';

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
			<main className="container mx-auto px-4 py-8 max-w-4xl">
				<UserProfile user={user} />
			</main>
		</div>
	);
}

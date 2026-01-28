import { fetchGithubRepos, fetchGithubUser } from '@/lib/github-api';
import { createFileRoute } from '@tanstack/react-router';
import type { GitHubRepo, GitHubUser } from '@/lib/types';
import { UserProfile } from '@/components/UserProfile';
import { RepoList } from '@/components/RepoList';

export const Route = createFileRoute('/user/$username')({
	loader: async ({ params }) => {
		const user: GitHubUser = await fetchGithubUser(params.username);
		const repos: GitHubRepo[] = await fetchGithubRepos(params.username);
		return { user, repos };
	},
	component: UserPage,
});

function UserPage() {
	const { user, repos } = Route.useLoaderData();

	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto px-4 py-8 max-w-4xl">
				<UserProfile user={user} />
				<div className='mt-8'>
					<RepoList repos={repos} />
				</div>
			</main>
		</div>
	);
}

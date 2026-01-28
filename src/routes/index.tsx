import { SearchBar } from '@/components/SearchBar';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: HomePage,
});

function HomePage() {
	const navigate = useNavigate();

	const handleSearch = (username: string) => {
		navigate({ to: '/user/$username', params: { username } });
	};
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

					<SearchBar onSearch={handleSearch} />
				</div>
			</main>
		</div>
	);
}

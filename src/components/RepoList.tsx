import type { GitHubRepo } from '@/lib/types';
import { RepoCard } from './RepoCard.tsx';

interface RepoListProps {
    repos: GitHubRepo[];
}

export function RepoList({ repos }: RepoListProps) {
    if (!repos.length){
        return <p className="text-center text-muted-foreground">No repositories found.</p>;
    }
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
            ))}
        </div>
    )
}
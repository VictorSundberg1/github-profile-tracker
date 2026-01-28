import { useState } from 'react';
import type { GitHubRepo } from '@/lib/types';
import { RepoCard } from './RepoCard';
import { Button } from './ui/button';

type SortKey = 'stars' | 'forks' | 'updated';

interface RepoListProps {
  repos: GitHubRepo[];
}

export function RepoList({ repos }: RepoListProps) {
  const [sortKey, setSortKey] = useState<SortKey>('updated');

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortKey === 'stars') return b.stargazers_count - a.stargazers_count;
    if (sortKey === 'forks') return b.forks_count - a.forks_count;
    if (sortKey === 'updated') return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    return 0;
  });

  if (!repos.length) {
    return <p className="text-center text-muted-foreground">No repositories found.</p>;
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Button variant={sortKey === 'updated' ? 'default' : 'outline'} onClick={() => setSortKey('updated')}>
          Updated
        </Button>
        <Button variant={sortKey === 'stars' ? 'default' : 'outline'} onClick={() => setSortKey('stars')}>
          Stars
        </Button>
        <Button variant={sortKey === 'forks' ? 'default' : 'outline'} onClick={() => setSortKey('forks')}>
          Forks
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
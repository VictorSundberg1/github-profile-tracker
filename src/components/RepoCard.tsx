import type { GitHubRepo } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface RepoCardProps {
  repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {repo.name}
          </a>
        </CardTitle>
        {repo.description && (
          <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {repo.language && (
            <Badge variant="outline" className="px-2 py-0.5">
              {repo.language}
            </Badge>
          )}
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </div>
        {repo.license?.spdx_id && repo.license.spdx_id !== "NOASSERTION" && (
            <span className="ml-auto text-xs">{repo.license.spdx_id}</span>
          )}
      </CardContent>
    </Card>
  );
}
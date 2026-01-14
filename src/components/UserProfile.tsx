import { GitHubUser } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
	BookOpen,
	Calendar,
	ExternalLink,
	UserPlus,
	Users,
} from 'lucide-react';

interface UserProfileProps {
	user: GitHubUser;
}

export function UserProfile({ user }: UserProfileProps) {
	const joinDate = new Date(user.created_at).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<Card>
			<CardHeader>
				<div className="flex flex-col sm:flex-row gap-6 items-start">
					<Avatar className="size-24 sm:size-32">
						<AvatarImage src={user.avatar_url} alt={user.login} />
						<AvatarFallback>{user.login[0].toUpperCase()}</AvatarFallback>
					</Avatar>

					<div className="flex-1 space-y-3">
						<div>
							<CardTitle className="text-2xl sm:text-3xl">
								{user.name || user.login}
							</CardTitle>
							<p className="text-muted-foreground text-sm sm:text-base">
								@{user.login}
							</p>
						</div>

						{user.bio && (
							<p className="text-foreground text-sm sm:text-base">{user.bio}</p>
						)}

						<a
							href={user.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
						>
							View on Github!
							<ExternalLink className="size-4" />
						</a>
					</div>
				</div>
			</CardHeader>

			<CardContent>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					<StatCard
						icon={<BookOpen className="size-5" />}
						label="Repositories"
						value={user.public_repos}
					/>
					<StatCard
						icon={<Users className="size-5" />}
						label="Followers"
						value={user.followers}
					/>
					<StatCard
						icon={<UserPlus className="size-5" />}
						label="Following"
						value={user.following}
					/>
					<StatCard
						icon={<Calendar className="size-5" />}
						label="Joined"
						value={joinDate}
					/>
				</div>
			</CardContent>
		</Card>
	);
}

function StatCard({
	icon,
	label,
	value,
}: {
	icon: React.ReactNode;
	label: string;
	value: string | number;
}) {
	return (
		<div className="flex flex-col gap-2 p-3 rounded-lg bg-muted/50">
			<div className="flex items-center gap-2 text-muted-foreground">
				{icon}
				<span className="text-xs">{label}</span>
			</div>
			<p className="text-lg font-semibold">{value}</p>
		</div>
	);
}

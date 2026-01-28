import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchBarProps {
	onSearch: (username: string) => void;
	placeholder?: string;
}

export function SearchBar({
	onSearch,
	placeholder = 'Enter Github username...',
}: SearchBarProps) {
	const [username, setUsername] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const trimmedUsername = username.trim();
		if (trimmedUsername) {
			onSearch(trimmedUsername);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<div className="flex items-center gap-2 p-4 border border-border rounded-lg bg-card">
				<Search className="w-5 h-5 text-muted-foreground shrink-0" />
				<Input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder={placeholder}
					className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0 shadow-none"
				/>
				<Button type="submit" size="sm" disabled={!username.trim()}>
					Search
				</Button>
			</div>
		</form>
	);
}

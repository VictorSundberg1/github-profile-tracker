import languageColors from '@/lib/language-colors.json';

interface LanguageTagProps {
  language: string;
}

export function LanguageTag({ language }: LanguageTagProps) {
  const color = (languageColors as unknown as Record<string, { color: string }>)[language]?.color ?? '#6e7681';
  return (
    <span className="flex items-center gap-1 text-xs font-medium">
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {language}
    </span>
  );
}
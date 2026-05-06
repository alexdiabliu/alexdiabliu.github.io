import { Search } from 'lucide-react';

interface PortfolioFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
}

export function PortfolioFilter({
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagToggle,
  availableTags,
}: PortfolioFilterProps) {
  return (
    <div className="mb-12 space-y-6">
      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[var(--cosmos-panel)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--glow-blue)] focus:outline-none transition-colors"
          style={{ borderRadius: '2px' }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-4 py-2 text-xs font-mono tracking-wide border transition-all duration-300 ${
                isSelected
                  ? 'bg-[var(--glow-blue)] border-[var(--glow-blue)] text-[var(--cosmos-black)]'
                  : 'border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--glow-blue)] hover:text-[var(--foreground)]'
              }`}
              style={{ borderRadius: '2px' }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

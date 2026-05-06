import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  year?: string;
  featured?: boolean;
}

export function ProjectCard({ id, title, description, tags, image, year, featured = false }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/project/${id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 hover:border-[var(--glow-blue)] hover:shadow-[0_0_30px_rgba(74,123,255,0.15)] cursor-pointer"
      style={{ borderRadius: '2px' }}
    >
      {image && (
        <div className="mb-6 overflow-hidden bg-[var(--cosmos-deep)] aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      )}

      <div className="space-y-4">
        {year && (
          <div className="font-mono text-xs tracking-wider text-[var(--muted-foreground)] uppercase">
            {year}
          </div>
        )}

        <h3 className="text-xl tracking-tight text-[var(--foreground)] group-hover:text-[var(--glow-blue)] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-mono tracking-wide border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--glow-blue)] hover:text-[var(--foreground)] transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

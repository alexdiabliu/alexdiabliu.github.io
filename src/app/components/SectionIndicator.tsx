import { useEffect, useState } from 'react';

export function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = [
        { id: 'hero', number: 1 },
        { id: 'about', number: 2 },
        { id: 'work', number: 3 },
        { id: 'experience', number: 4 },
        { id: 'contact', number: 5 },
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setCurrentSection(section.number);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-12 top-1/2 -translate-y-1/2 z-50 flex items-center gap-4">
      <span className="font-mono text-sm text-[var(--muted-foreground)]">
        {String(currentSection).padStart(2, '0')}
      </span>
      <div className="w-16 h-px bg-[var(--border)]" />
    </div>
  );
}

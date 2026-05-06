import { useState } from 'react';
import { motion } from 'motion/react';

interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
  index: number;
}

interface OrbitalTimelineProps {
  experiences: Experience[];
}

const planetData = [
  {
    name: 'Mercury',
    baseColor: '#d4d4d8',
    gradientColors: ['#f0f0f0', '#c0c0c0', '#a8a8a8'],
    borderColor: '#e0e0e0',
  },
  {
    name: 'Venus',
    baseColor: '#e8c285',
    gradientColors: ['#ffd966', '#e8c285', '#d4a574'],
    borderColor: '#f5d99f',
  },
  {
    name: 'Earth',
    baseColor: '#4a9eff',
    gradientColors: ['#7bc8f5', '#4a9eff', '#3d8dd9'],
    borderColor: '#5fa8ff',
  },
  {
    name: 'Mars',
    baseColor: '#ff8586',
    gradientColors: ['#ffb0b0', '#ff8586', '#d45842'],
    borderColor: '#ffa5a6',
  },
];

function PlanetNode({
  planet,
  experience,
  isHovered,
  onHover,
}: {
  planet: typeof planetData[0];
  experience: Experience;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}) {
  return (
    <div className="relative group">
      <motion.div
        className="relative z-10"
        onHoverStart={() => onHover(true)}
        onHoverEnd={() => onHover(false)}
      >
        <motion.div
          className="w-20 h-20 rounded-full cursor-pointer relative overflow-hidden flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${planet.gradientColors[0]}, ${planet.gradientColors[1]}, ${planet.gradientColors[2]})`,
            boxShadow: `0 0 20px ${planet.baseColor}40, inset -5px -5px 15px ${planet.baseColor}60`,
            border: `3px solid ${planet.borderColor}`,
          }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          {planet.name === 'Mercury' && (
            <>
              <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-gray-400 opacity-60" />
              <div className="absolute bottom-4 left-3 w-1.5 h-1.5 rounded-full bg-gray-500 opacity-50" />
            </>
          )}

          {planet.name === 'Venus' && (
            <>
              <div
                className="absolute top-1/4 left-0 right-0 h-px opacity-30"
                style={{ background: '#d4a574' }}
              />
              <div
                className="absolute top-1/2 left-0 right-0 h-px opacity-40"
                style={{ background: '#d4a574' }}
              />
              <div
                className="absolute bottom-1/4 left-0 right-0 h-px opacity-30"
                style={{ background: '#d4a574' }}
              />
            </>
          )}

          {planet.name === 'Earth' && (
            <>
              <div
                className="absolute top-1/3 left-1/4 w-4 h-5 rounded-full opacity-70"
                style={{ background: '#4caf50' }}
              />
              <div
                className="absolute bottom-1/3 right-1/4 w-3 h-4 rounded-full opacity-70"
                style={{ background: '#4caf50' }}
              />
              <div
                className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full opacity-90"
                style={{ background: '#fff' }}
              />
            </>
          )}

          {planet.name === 'Mars' && (
            <>
              <div className="absolute top-2 right-3 w-2.5 h-2.5 rounded-full bg-red-300 opacity-50" />
              <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-red-400 opacity-60" />
            </>
          )}

          <span className="relative z-10 font-mono text-[10px] leading-tight text-center px-1" style={{ color: planet.name === 'Earth' ? '#fff' : '#000' }}>
            {experience.year}
          </span>
        </motion.div>

        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <p className="text-sm text-[var(--foreground)] mb-1">{experience.role}</p>
          <p className="text-xs text-[var(--muted-foreground)]">{experience.company}</p>
        </div>

        <motion.div
          className="absolute top-32 left-1/2 -translate-x-1/2 w-72 p-6 border border-[var(--border)] bg-[var(--cosmos-panel)] mt-8"
          style={{
            borderRadius: '2px',
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-3">
            <div className="font-mono text-xs text-[var(--muted-foreground)] tracking-wider">
              {experience.year}
            </div>
            <h3 className="text-lg text-[var(--foreground)]">{experience.role}</h3>
            <p className="text-sm" style={{ color: planet.gradientColors[1] }}>
              {experience.company}
            </p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {experience.description}
            </p>
          </div>

          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t border-[var(--border)] bg-[var(--cosmos-panel)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function OrbitalTimeline({ experiences }: OrbitalTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative py-24">
      <div className="md:hidden space-y-6">
        <div className="text-center font-mono text-xs tracking-wider text-[var(--muted-foreground)]">
          2003
        </div>
        {experiences.slice(0, 4).map((exp, index) => (
          <div
            key={index}
            className="border border-[var(--border)] bg-[var(--cosmos-panel)] p-5"
            style={{ borderRadius: '2px' }}
          >
            <div className="font-mono text-xs text-[var(--muted-foreground)] tracking-wider mb-2">
              {exp.year}
            </div>
            <h3 className="text-base text-[var(--foreground)]">{exp.role}</h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">{exp.company}</p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="relative hidden md:flex items-center justify-between px-8">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, var(--glow-blue) 0%, var(--glow-blue) 50%, transparent 50%, transparent 100%)`,
              backgroundSize: '12px 1px',
              backgroundRepeat: 'repeat-x',
              filter: 'drop-shadow(0 0 4px var(--glow-blue))',
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            className="w-24 h-24 rounded-full flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ff6b3d, #ff4500, #cc3700)',
              boxShadow: '0 0 40px rgba(255, 107, 61, 0.6), inset -5px -5px 20px rgba(204, 55, 0, 0.5)',
              border: '3px solid #ff8560',
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(255, 107, 61, 0.6), inset -5px -5px 20px rgba(204, 55, 0, 0.5)',
                '0 0 60px rgba(255, 107, 61, 0.8), inset -5px -5px 25px rgba(204, 55, 0, 0.6)',
                '0 0 40px rgba(255, 107, 61, 0.6), inset -5px -5px 20px rgba(204, 55, 0, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute top-2 right-3 w-3 h-3 rounded-full bg-orange-400 opacity-50" />
            <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-red-600 opacity-40" />
            <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-orange-300 opacity-60" />

            <span className="relative z-10 font-mono text-sm text-white">2003</span>
          </motion.div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs text-[var(--muted-foreground)]">
            2003
          </div>
        </div>

        <div className="flex-1 flex items-center justify-around px-12">
          {experiences.slice(0, 4).map((exp, index) => (
            <PlanetNode
              key={index}
              planet={planetData[index]}
              experience={exp}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

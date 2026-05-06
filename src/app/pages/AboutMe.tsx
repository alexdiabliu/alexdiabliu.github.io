import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StarField } from '../components/StarField';
import { SectionContainer } from '../components/SectionContainer';
import { CursorTrail } from '../components/CursorTrail';
import taekwondoImg from '../../imports/taekwondo-team.png';
import musicImg from '../../imports/music-production.png';

export function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const interests = [
    {
      title: 'Taekwondo',
      description: 'Active with the McMaster Taekwondo Team and motivated by disciplined training, teamwork, and competition.',
    },
    {
      title: 'Running',
      description: 'Training for endurance events, with a focus on long-distance goals including the Toronto Waterfront Marathon 2025.',
    },
    {
      title: 'Music Production',
      description: 'Producing and sharing original music projects as Alkami Music.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <StarField />
      <CursorTrail />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
          <div className="font-mono text-xs tracking-widest uppercase text-[var(--foreground)]">
            About Me
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24">
        <SectionContainer>
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-5xl tracking-tight mb-6">More About Me</h1>
              <p className="text-xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto">
                Goal-driven electrical and biomedical engineering student focused on using research and software to build technology that improves people's lives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div
                className="border border-[var(--border)] p-8 bg-[var(--cosmos-panel)]"
                style={{ borderRadius: '2px' }}
              >
                <h2 className="text-2xl mb-6">Background</h2>
                <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                  <p>
                    My work spans engineering, software development, and digital marketing. Through internships and projects, I have built practical systems in GPU validation, data visualization, API integrations, and embedded prototypes.
                  </p>
                  <p>
                    I have contributed to both technical and cross-functional work, from Python automation and web development to research writing and market analysis. I enjoy taking ideas from early concept through implementation and iteration.
                  </p>
                  <p>
                    Across each role, my focus has stayed consistent: build useful technology, communicate clearly, and keep learning new tools that expand what I can deliver.
                  </p>
                </div>
              </div>

              <div
                className="border border-[var(--border)] p-8 bg-[var(--cosmos-panel)]"
                style={{ borderRadius: '2px' }}
              >
                <h2 className="text-2xl mb-6">Philosophy</h2>
                <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                  <p>
                    I believe impactful engineering starts with understanding the real problem and the people affected by it. Strong technical decisions should always connect back to clear outcomes.
                  </p>
                  <p>
                    I value practical solutions: systems that are measurable, maintainable, and easy for others to use. Whether I am building software or hardware, I prioritize reliability and clarity.
                  </p>
                  <p>
                    I am motivated by continuous improvement and collaboration. Working across disciplines has taught me to move quickly, adapt to constraints, and communicate effectively with technical and non-technical teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl tracking-tight mb-12 text-center">Multidisciplinary Interests</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {interests.map((interest, i) => (
                  <div
                    key={i}
                    className="border border-[var(--border)] p-6 bg-[var(--cosmos-panel)] hover:border-[var(--glow-blue)] transition-all duration-300"
                    style={{ borderRadius: '2px' }}
                  >
                    <h3 className="text-lg mb-3 text-[var(--foreground)]">{interest.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl tracking-tight mb-6 text-center">Outside of Work</h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-center max-w-3xl mx-auto mb-10">
                Outside engineering, I spend most of my time in three areas: Taekwondo with the McMaster Taekwondo Team, distance running with a goal toward the Toronto Waterfront Marathon 2025, and music production through my Alkami Music channel.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-[var(--border)] p-4 bg-[var(--cosmos-panel)]" style={{ borderRadius: '2px' }}>
                  <img
                    src={taekwondoImg}
                    alt="McMaster Taekwondo Team competition moment"
                    className="w-full h-72 object-cover mb-4"
                    style={{ borderRadius: '2px' }}
                  />
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Taekwondo competition day with the McMaster Taekwondo Team.
                  </p>
                </div>
                <div className="border border-[var(--border)] p-4 bg-[var(--cosmos-panel)]" style={{ borderRadius: '2px' }}>
                  <img
                    src={musicImg}
                    alt="Music production setup"
                    className="w-full h-72 object-cover mb-4"
                    style={{ borderRadius: '2px' }}
                  />
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Music production setup for Alkami Music. Listen on{' '}
                    <a
                      href="https://www.youtube.com/@AlkamiMusic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--glow-blue)] hover:underline"
                    >
                      YouTube
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div
              className="border border-[var(--border)] p-8 bg-[var(--cosmos-panel)]"
              style={{ borderRadius: '2px' }}
            >
              <h2 className="text-2xl mb-6">Beyond The Screen</h2>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  Outside project work, I invest time in expanding my engineering toolkit through hands-on experimentation and independent learning. I enjoy tackling technically difficult problems that require both structured analysis and creativity.
                </p>
                <p>
                  I am especially interested in where software, hardware, and biomedical systems intersect, and in building products that combine data, automation, and practical usability.
                </p>
                <p>
                  I also value communication and mentorship, and I try to make my work understandable and reusable for teammates, collaborators, and future contributors.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-[var(--border)] text-center">
              <h2 className="text-2xl mb-6">Let's Connect</h2>
              <p className="text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
                I am always open to opportunities and collaborations in engineering, software development, and research.
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 border border-[var(--border)] hover:border-[var(--glow-blue)] hover:text-[var(--glow-blue)] transition-all"
                style={{ borderRadius: '2px' }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}

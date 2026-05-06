import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';
import { StarField } from '../components/StarField';
import { ProjectCard } from '../components/ProjectCard';
import { SectionContainer } from '../components/SectionContainer';
import { PortfolioFilter } from '../components/PortfolioFilter';
import { OrbitalTimeline } from '../components/OrbitalTimeline';
import { CursorTrail } from '../components/CursorTrail';
import logoSrc from '../../imports/logo.png';
import { motion } from 'motion/react';

export function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const projects = [
    {
      id: 'thermosleeve',
      title: 'ThermoSleeve',
      description: 'Wearable neuromuscular therapy concept combining hardware and software biosignals.',
      tags: ['Python', 'Raspberry Pi', 'Biomedical', 'Embedded Systems'],
      image: '/Old/images/thermosleeve.jpg',
      year: '2022',
      featured: true,
    },
    {
      id: 'spatial-mapping',
      title: 'Embedded 3D Spatial Mapping System',
      description: 'Real-time embedded system for spatial mapping and environment reconstruction workflows.',
      tags: ['Embedded C', 'Python', 'Robotics', 'Arm Cortex-M4'],
      image: '/Old/images/simu.png',
      year: '2024',
    },
    {
      id: 'smart-home-assistant',
      title: 'Smart Home Assistant',
      description: 'Automation-oriented smart home assistant integrating voice and device orchestration.',
      tags: ['Python', 'Raspberry Pi', 'AWS', 'Automation'],
      image: '/Old/images/jarvis.jpg',
      year: '2024',
    },
    {
      id: 'gpu-performance-metrics',
      title: 'GPU Temperature and Performance Optimization Analysis',
      description: 'Determining optimal performance-to-power efficiency given temperature constraints in high-performance GPUs.',
      tags: ['Python', 'Machine Learning', 'Optimization', 'GPU'],
      image: '/Old/images/gpu.png',
      year: '2024',
    },
    {
      id: 'automatic-car',
      title: 'Engineering Competition Finalist: Miniature Automatic Car',
      description: 'Autonomous vehicle control and sensing project with embedded intelligence loops.',
      tags: ['C++', 'Arduino', 'Robotics', 'Automation'],
      image: '/Old/images/car.png',
      year: '2024',
    },
    {
      id: 'invoicemaker',
      title: 'InvoiceMaker',
      description: 'Invoice generation web tool for streamlined billing workflows and export automation.',
      tags: ['Python', 'Automation'],
      image: '/Old/images/invoice.png',
      year: '2024',
    },
    {
      id: 'movement-classifier',
      title: 'Movement Classifier',
      description: 'Human movement classification model and pipeline for sensor-driven activity prediction.',
      tags: ['Python', 'Machine Learning', 'Data Science', 'Human Activity Recognition'],
      image: '/Old/images/har.png',
      year: '2024',
    },
  ];

  const experience = [
    {
      role: 'GPU Validation Engineer',
      company: 'Advanced Micro Devices (AMD)',
      year: 'MAY 2023—PRESENT',
      description: 'Developed customizable automated virtualization test cases for the MI300 Data Centre chip and added specific features to optimize their execution. Automated the implementation of machine learning models and training scripts on virtual machines with docker.',
      index: 0,
    },
    {
      role: 'Data Visualization Engineer',
      company: 'Hermes Aerospace Corp.',
      year: 'JAN 2023—APR 2023',
      description: 'Utilized Python to retrieve, clean and efficiently segment raw drone data. Created a powerful dashboard-style program with 3D visualization of retrieved data.',
      index: 1,
    },
    {
      role: 'Software Programmer',
      company: 'LinkClicks',
      year: 'JUN 2022—SEP 2022',
      description: 'Developed an API that connects from LinkedIn to the company website as part of an all-inclusive ads manager, including authorization and campaign management.',
      index: 2,
    },
    {
      role: 'Web Programmer',
      company: 'Werrv Inc.',
      year: 'JUN 2022—AUG 2022',
      description: 'Incorporated scarcity marketing into the Werrv website by editing product display quantity with conditional activation based on various parameters.',
      index: 3,
    },
  ];


  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      <StarField />
      <CursorTrail />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm tracking-wider uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-sm tracking-wider uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                WORK
              </button>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
              <img src={logoSrc} alt="Logo" className="h-12 w-12" />
            </div>

            <div className="flex items-center gap-6">
              <a
                href="/resume.pdf"
                download="Alexander_Diab-Liu_Resume.pdf"
                className="flex items-center gap-2 text-sm tracking-wider uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>RESUME</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm tracking-wider uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                CONTACTS
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted-foreground)]">
            PERSONAL WEBSITE
          </p>

          <h1 className="text-7xl tracking-tight" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
            ALEX DIAB-LIU
          </h1>

          <p className="text-sm tracking-[0.2em] uppercase" style={{ color: '#d4a574', fontWeight: 400 }}>
            ELECTRICAL AND BIOMEDICAL ENGINEER
          </p>
        </motion.div>
      </section>

      <SectionContainer id="about" className="border-t border-[var(--border)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl tracking-tight mb-8">About</h2>
          <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed">
            <p>
              Goal-driven engineering student seeking a position to leverage research and software skills to study how engineering concepts can make an impact on people's lives. Always eager to learn and looking for opportunities to develop new skills.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/about-me')}
              className="px-8 py-3 border border-[var(--border)] hover:border-[var(--glow-blue)] hover:text-[var(--glow-blue)] transition-all"
              style={{ borderRadius: '2px' }}
            >
              More About Me
            </button>
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer id="work">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl tracking-tight mb-4">Portfolio</h2>
            <p className="text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
              Projects spanning software engineering, data visualization, biomedical research, and digital marketing
            </p>
          </div>

          <PortfolioFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            availableTags={allTags}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-[var(--muted-foreground)]">
              No projects found matching your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </SectionContainer>

      <SectionContainer id="experience" className="border-t border-[var(--border)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl tracking-tight mb-4">Experience</h2>
            <p className="text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
              Professional journey across engineering, software, and digital marketing
            </p>
          </div>
          <OrbitalTimeline experiences={experience} />
        </motion.div>
      </SectionContainer>

      <SectionContainer id="contact" className="border-t border-[var(--border)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl tracking-tight mb-8">Get in Touch</h2>
          <p className="text-[var(--muted-foreground)] mb-12">
            Available for opportunities in engineering, software development, and research
          </p>
          <div className="flex gap-8 justify-center text-sm mb-8">
            <a
              href="mailto:alexdiabliu@gmail.com"
              className="text-[var(--muted-foreground)] hover:text-[var(--glow-blue)] transition-colors"
            >
              alexdiabliu@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/alexdiab-liu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--glow-blue)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </SectionContainer>

      <footer className="border-t border-[var(--border)] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest">
            © 2026 ALEXANDER KAMIL DIAB-LIU
          </p>
        </div>
      </footer>
    </div>
  );
}

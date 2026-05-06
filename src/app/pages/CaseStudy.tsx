import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StarField } from '../components/StarField';
import { SectionContainer } from '../components/SectionContainer';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { CursorTrail } from '../components/CursorTrail';

interface Project {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  featured?: boolean;
}

const projectData: Record<string, Project & { fullDescription: string; challenge: string; solution: string; results: string[]; images: string[] }> = {
  thermosleeve: {
    title: 'ThermoSleeve',
    description: 'Wearable neuromuscular therapy concept combining hardware and software biosignals.',
    tags: ['Python', 'Raspberry Pi', 'Biomedical', 'Embedded Systems'],
    year: '2022',
    featured: true,
    fullDescription: 'ThermoSleeve was designed as an all-inclusive wearable device that monitors and alleviates symptoms of neuromuscular disorders through heating, sensing, and symptom-predictive features. The system used EMG MyoWare sensors and a Raspberry Pi to detect tremor severity in real time and log data for future medical reference.',
    challenge: 'Neuromuscular disorders affect millions globally, and hand or arm tremors can make daily activities difficult and painful. The challenge was building a practical wearable that could both detect symptoms and help reduce them while remaining usable for day-to-day life.',
    solution: 'I collaborated on a glove and compressive sleeve system with integrated heating elements, EMG sensing, severity indicators (green/yellow/red LEDs), and data logging. We also designed a dedicated housing unit for the Raspberry Pi and electronics to support easy setup and storage.',
    results: [
      'Built a functional wearable concept for symptom monitoring and relief',
      'Implemented real-time tremor severity feedback with LED indicators',
      'Logged symptom history for user and physician review',
      'Produced complete design assets including CAD and engineering documentation',
    ],
    images: ['/Old/images/thermosleeve.jpg', '/Old/thermosleeve-images/thermocover.png'],
  },
  'spatial-mapping': {
    title: 'Embedded 3D Spatial Mapping System',
    description: 'Real-time embedded system for spatial mapping and environment reconstruction workflows.',
    tags: ['Embedded C', 'Python', 'Robotics', 'Arm Cortex-M4'],
    year: '2024',
    fullDescription: 'This project focuses on real-time 3D spatial mapping on embedded hardware. The system captures environment data, processes it through a lightweight reconstruction pipeline, and outputs structured spatial information for robotics and navigation use cases.',
    challenge: 'The key difficulty was balancing reconstruction quality with latency and memory constraints on embedded targets while keeping data flow robust under variable sensor conditions.',
    solution: 'I implemented a pipeline that combined embedded software modules with sensor-data processing for mapping. The stack was tuned for constrained compute environments while preserving useful reconstruction fidelity.',
    results: [
      'Built an end-to-end embedded mapping workflow',
      'Optimized execution for constrained hardware resources',
      'Documented architecture and reproducible setup for future extensions',
      'Established a foundation for navigation and SLAM-adjacent experiments',
    ],
    images: ['/Old/images/simu.png'],
  },
  'smart-home-assistant': {
    title: 'Smart Home Assistant',
    description: 'Automation-oriented smart home assistant integrating voice and device orchestration.',
    tags: ['Python', 'Raspberry Pi', 'AWS', 'Automation'],
    year: '2024',
    fullDescription: 'A smart home orchestration platform designed to simplify cross-device control and automate recurring household tasks through a central assistant workflow.',
    challenge: 'Major challenges included normalizing device capabilities across integrations, minimizing command latency, and handling partial third-party failures gracefully.',
    solution: 'I combined API-driven services, backend automation logic, and web interfaces to coordinate commands, state changes, and event triggers across heterogeneous smart-home devices.',
    results: [
      'Implemented unified control workflows across multiple device types',
      'Improved reliability through failure-aware command handling',
      'Created an extendable automation architecture for new routines',
      'Documented setup and architecture for reproducible deployment',
    ],
    images: ['/Old/images/jarvis.jpg'],
  },
  'gpu-performance-metrics': {
    title: 'GPU Temperature and Performance Optimization Analysis',
    description: 'Determining optimal performance-to-power efficiency given temperature constraints in high-performance GPUs.',
    tags: ['Python', 'Machine Learning', 'Optimization', 'GPU'],
    year: '2024',
    fullDescription: 'This project investigates GPU compute behavior through targeted metric collection and analysis workflows to identify bottlenecks in parallel workloads and optimize performance-to-power tradeoffs.',
    challenge: 'The challenge was extracting comparable metrics across runs, reducing measurement overhead, and validating optimization claims with repeatable benchmarks.',
    solution: 'I combined analysis tooling with reproducible benchmark scripts to profile thermal behavior, throughput, and execution efficiency under varying operating conditions.',
    results: [
      'Created a repeatable workflow for GPU performance analysis',
      'Identified key tradeoffs between temperature and throughput',
      'Produced benchmark-driven optimization recommendations',
      'Improved clarity of performance bottlenecks in parallel workloads',
    ],
    images: ['/Old/images/gpu.png'],
  },
  'automatic-car': {
    title: 'Engineering Competition Finalist: Miniature Automatic Car',
    description: 'Autonomous vehicle control and sensing project with embedded intelligence loops.',
    tags: ['C++', 'Arduino', 'Robotics', 'Automation'],
    year: '2024',
    fullDescription: 'This autonomous car project explored embedded decision-making for navigation, obstacle awareness, and motion control under constrained hardware resources.',
    challenge: 'Reliable sensing, low-latency control loops, and stable driving behavior under changing environmental conditions were core engineering constraints.',
    solution: 'I integrated microcontroller control, sensor interfaces, and software logic for pathing and actuation so command logic translated into physical autonomous behavior.',
    results: [
      'Built a functional embedded autonomy prototype',
      'Integrated sensing and control into a coherent vehicle stack',
      'Improved responsiveness with lightweight decision logic',
      'Reached finalist-level quality in engineering competition context',
    ],
    images: ['/Old/images/car.png'],
  },
  invoicemaker: {
    title: 'InvoiceMaker',
    description: 'Invoice generation web tool for streamlined billing workflows and export automation.',
    tags: ['Python', 'Automation'],
    year: '2024',
    fullDescription: 'InvoiceMaker is a productivity-focused web tool that simplifies invoice creation, formatting, and delivery for practical billing workflows.',
    challenge: 'The primary challenge was balancing flexibility and speed while preserving clean output formatting and intuitive repeat-use flows.',
    solution: 'I developed a lightweight invoicing workflow focused on fast entry, reliable formatting, and export-friendly outputs to support day-to-day operations.',
    results: [
      'Reduced manual effort in recurring invoice preparation',
      'Streamlined invoice formatting and delivery process',
      'Enabled repeatable billing workflows for faster turnaround',
      'Provided maintainable foundation for additional automation features',
    ],
    images: ['/Old/images/invoice.png'],
  },
  'movement-classifier': {
    title: 'Movement Classifier',
    description: 'Human movement classification model and pipeline for sensor-driven activity prediction.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Human Activity Recognition'],
    year: '2024',
    fullDescription: 'This project builds a classification pipeline that predicts movement classes from recorded sensor signals, with a focus on reproducible model development and evaluation.',
    challenge: 'Critical issues included feature quality, class imbalance, and maintaining generalization across varied movement samples and recording conditions.',
    solution: 'I implemented a Python-based ML workflow for preprocessing, training, validation, and prediction analysis, iterating on features and models to improve robustness.',
    results: [
      'Delivered a reproducible movement-classification baseline',
      'Improved interpretability of model performance across classes',
      'Built an end-to-end data processing and evaluation pipeline',
      'Established a framework for future HAR model improvements',
    ],
    images: ['/Old/images/har.png'],
  },
};

export function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const project = projectId ? projectData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
        <StarField />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl mb-8">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 border border-[var(--border)] hover:border-[var(--glow-blue)] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
            Case Study
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-xs tracking-wider text-[var(--muted-foreground)] uppercase mb-4">
                {project.year}
              </div>
              <h1 className="text-5xl tracking-tight mb-6">{project.title}</h1>
              <p className="text-xl text-[var(--muted-foreground)] leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-mono tracking-wide border border-[var(--glow-blue)] text-[var(--glow-blue)]"
                    style={{ borderRadius: '2px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <ProjectCarousel images={project.images} />
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-2xl tracking-tight mb-4">Overview</h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl tracking-tight mb-4">The Challenge</h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl tracking-tight mb-4">The Solution</h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl tracking-tight mb-4">Results & Impact</h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--glow-blue)] mt-2 flex-shrink-0" />
                      <span className="text-[var(--muted-foreground)] leading-relaxed">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-[var(--border)] text-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 border border-[var(--border)] hover:border-[var(--glow-blue)] hover:text-[var(--glow-blue)] transition-all"
                style={{ borderRadius: '2px' }}
              >
                View More Projects
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}

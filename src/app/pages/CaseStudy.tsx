import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StarField } from '../components/StarField';
import { SectionContainer } from '../components/SectionContainer';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { CursorTrail } from '../components/CursorTrail';
import thermosleeveImg from '../../imports/project-thermosleeve.jpg';
import spatialMappingImg from '../../imports/project-spatial-mapping.png';
import smartHomeImg from '../../imports/project-smart-home.jpg';
import gpuImg from '../../imports/project-gpu.png';
import automaticCarImg from '../../imports/project-automatic-car.png';
import invoicemakerImg from '../../imports/project-invoicemaker.png';
import movementClassifierImg from '../../imports/project-movement-classifier.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  featured?: boolean;
  repoUrl?: string;
  pdfViewUrl?: string;
  pdfSourceUrl?: string;
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
    images: [thermosleeveImg],
  },
  'spatial-mapping': {
    title: 'Embedded 3D Spatial Mapping System',
    description: 'Embedded 360-degree spatial scanner using ToF sensing, stepper control, and Open3D visualization.',
    tags: ['Embedded C', 'UART', 'I2C', 'Open3D', 'MSP432E401Y'],
    year: '2024',
    repoUrl: 'https://github.com/alexdiabliu/Embedded-3D-Spatial-Mapping-System',
    pdfViewUrl: 'https://github.com/alexdiabliu/Embedded-3D-Spatial-Mapping-System/blob/main/Final_Report_2DX3.pdf',
    pdfSourceUrl: 'https://raw.githubusercontent.com/alexdiabliu/Embedded-3D-Spatial-Mapping-System/main/Final_Report_2DX3.pdf',
    fullDescription: 'Built an embedded mapping system with a VL53L1X Time-of-Flight sensor and a stepper motor on an MSP432E401Y microcontroller. The scanner performs 360-degree sweeps, transmits data to a PC over UART, and generates 3D point-cloud visualizations using Open3D.',
    challenge: 'The primary challenge was synchronizing sensor reads, motor movement, and serial output while maintaining reliable timing and scan quality on constrained embedded hardware.',
    solution: 'Implemented a full embedded pipeline in C with GPIO-based control, UART/I2C integration, and PC-side parsing/visualization scripts. The scan flow supports start/stop controls and repeatable 3D reconstruction.',
    results: [
      'Delivered full microcontroller-to-PC 3D mapping workflow',
      'Integrated VL53L1X ToF sensing with stepper-actuated scanning',
      'Produced validated point-cloud maps from indoor scenes',
      'Documented implementation and design in final technical report',
    ],
    images: [spatialMappingImg],
  },
  'smart-home-assistant': {
    title: 'Smart Home Assistant',
    description: 'AI-powered voice assistant on Raspberry Pi with alarms, music, intent classification, and offline chat.',
    tags: ['Python', 'Raspberry Pi', 'Whisper', 'SQLite', 'Ollama'],
    year: '2024',
    repoUrl: 'https://github.com/alexdiabliu/smart-home-assistant',
    fullDescription: 'SmartRise is a voice-driven bedside assistant built on Raspberry Pi 4 to reduce screen-heavy routines. It combines wake-word handling, speech recognition, intent classification, alarm scheduling, music playback, and local/offline chatbot support.',
    challenge: 'Key challenges included building an end-to-end command loop that remained responsive on-device while coordinating STT, intent parsing, parameter extraction, and execution reliability.',
    solution: 'Implemented a modular architecture with Whisper-based STT (AWS-hosted), pyttsx3 TTS, TF-IDF + SVM intent classification, spaCy parameter extraction, SQLite alarm management, and Ollama fallback chat.',
    results: [
      'Delivered working wake-word-to-action command pipeline',
      'Enabled local alarm scheduling with persistent SQLite storage',
      'Integrated offline-capable voice response and chatbot fallback',
      'Shipped reproducible codebase with tests and modular components',
    ],
    images: [smartHomeImg],
  },
  'gpu-performance-metrics': {
    title: 'GPU Temperature and Performance Optimization Analysis',
    description: 'Data-driven GPU optimization using PCA, regression, and particle swarm optimization (PSO).',
    tags: ['Python', 'Jupyter', 'PCA', 'Regression', 'PSO'],
    year: '2024',
    repoUrl: 'https://github.com/alexdiabliu/gpu-perf-metrics-4H03/tree/main',
    pdfViewUrl: 'https://github.com/alexdiabliu/gpu-perf-metrics-4H03/blob/main/CHEMENG4H03_FinalReport%20(3).pdf',
    pdfSourceUrl: 'https://raw.githubusercontent.com/alexdiabliu/gpu-perf-metrics-4H03/main/CHEMENG4H03_FinalReport%20(3).pdf',
    fullDescription: 'Conducted GPU performance analysis in a notebook-driven workflow using dimensionality reduction and optimization techniques. The project examines relationships between operating conditions and efficiency outcomes.',
    challenge: 'The central challenge was identifying robust performance predictors and optimization paths from noisy multivariate data while avoiding overfitting.',
    solution: 'Used PCA for feature reduction, regression modeling for trend estimation, and particle swarm optimization to search for improved operating points under thermal/performance constraints.',
    results: [
      'Built reproducible analytics pipeline in Jupyter notebooks',
      'Applied PCA + regression for interpretable performance modeling',
      'Used PSO for optimization-oriented design exploration',
      'Produced final report with results, plots, and conclusions',
    ],
    images: [gpuImg],
  },
  'automatic-car': {
    title: 'Engineering Competition Finalist: Miniature Automatic Car',
    description: 'Arduino obstacle-avoiding robot with movement logging and return-to-start behavior.',
    tags: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Robotics'],
    year: '2024',
    repoUrl: 'https://github.com/alexdiabliu/automatic-car',
    fullDescription: 'Developed an autonomous miniature robot that navigates with three ultrasonic sensors and dual-motor control. The system detects nearby obstacles, chooses turn behavior, and tracks movement history for retracing.',
    challenge: 'Needed robust obstacle handling and deterministic control on a simple Arduino stack while preserving enough state to execute return-to-start logic.',
    solution: 'Implemented sensor polling, motor control, movement logging, and reverse-playback routines to let the robot navigate forward and then retrace to origin.',
    results: [
      'Integrated three-sensor obstacle detection into drive control loop',
      'Added path logging and reverse replay for return-to-start',
      'Delivered complete Arduino implementation and hardware pin mapping',
      'Produced reliable autonomous behavior on constrained hardware',
    ],
    images: [automaticCarImg],
  },
  invoicemaker: {
    title: 'InvoiceMaker',
    description: 'Python-based invoice generator that compiles stakeholder/task data into polished PDFs.',
    tags: ['Python', 'ReportLab', 'OOP', 'PDF'],
    year: '2024',
    repoUrl: 'https://github.com/alexdiabliu/InvoiceMaker',
    fullDescription: 'InvoiceMaker is a Python application that builds professional invoice PDFs from payer/payee and task-line data. The project emphasizes clean object-oriented design and reusable billing entities.',
    challenge: 'The challenge was creating reusable invoice components while keeping the generated PDF layout readable and easy to customize for future use cases.',
    solution: 'Implemented modular classes for stakeholders, tasks, and bill state, then used ReportLab-based rendering to produce printable and shareable invoice outputs.',
    results: [
      'Generated complete invoice PDFs with line-item totals',
      'Created modular OOP structure for maintainable billing logic',
      'Enabled repeatable script-based invoice workflows',
      'Documented setup and customization in project README',
    ],
    images: [invoicemakerImg],
  },
  'movement-classifier': {
    title: 'Movement Classifier',
    description: 'Raspberry Pi + Sense HAT HAR pipeline with SVM training and live on-device inference.',
    tags: ['Python', 'scikit-learn', 'Sense HAT', 'SVM', 'HAR'],
    year: '2024',
    repoUrl: 'https://github.com/alexdiabliu/movement-classifier',
    pdfViewUrl: 'https://github.com/alexdiabliu/movement-classifier/blob/main/SVM%20HAR%20Paper.pdf',
    pdfSourceUrl: 'https://raw.githubusercontent.com/alexdiabliu/movement-classifier/main/SVM%20HAR%20Paper.pdf',
    fullDescription: 'Built a human activity recognition pipeline that records accelerometer data on Raspberry Pi Sense HAT, extracts windowed features, trains a multiclass linear SVM, and runs real-time inference on-device.',
    challenge: 'Ensuring reliable classification under live sensor noise required careful feature-window design, dataset labeling discipline, and evaluation across multiple activity classes.',
    solution: 'Implemented data collection scripts, feature extraction, scikit-learn training workflow, model serialization with joblib, and live classifier runtime that maps predictions to LED colors.',
    results: [
      'Achieved 94.32% held-out test accuracy in notebook evaluation',
      'Delivered end-to-end data collection, training, and deployment flow',
      'Enabled live Sense HAT activity feedback on-device',
      'Packaged pretrained model and reproducible training assets',
    ],
    images: [movementClassifierImg],
  },
};

export function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  useEffect(() => {
    setShowPdfEmbed(false);
  }, [projectId]);

  const project = projectId ? projectData[projectId] : null;
  useEffect(() => {
  }, [projectId, project]);

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

  const embeddedPdfUrl = project.pdfSourceUrl
    ? `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(project.pdfSourceUrl)}`
    : null;

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

              {(project.repoUrl || project.pdfViewUrl) && (
                <div>
                  <h2 className="text-2xl tracking-tight mb-4">Project Resources</h2>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-mono tracking-wide border border-[var(--glow-blue)] text-[var(--glow-blue)]"
                        style={{ borderRadius: '2px' }}
                      >
                        GitHub Repository
                      </a>
                    )}
                    {project.pdfViewUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setShowPdfEmbed(true);
                        }}
                        className="px-4 py-2 text-xs font-mono tracking-wide border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--glow-blue)] hover:text-[var(--foreground)]"
                        style={{ borderRadius: '2px' }}
                      >
                        Open Technical PDF
                      </button>
                    )}
                  </div>
                  {showPdfEmbed && embeddedPdfUrl && (
                    <iframe
                      src={embeddedPdfUrl}
                      title={`${project.title} PDF`}
                      className="w-full h-[700px] border border-[var(--border)] bg-[var(--cosmos-panel)]"
                      style={{ borderRadius: '2px' }}
                    />
                  )}
                </div>
              )}
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

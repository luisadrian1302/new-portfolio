import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Experience } from '../sections/Experience';
import { Contact } from '../sections/Contact';
import { ProjectDialog } from '../features/projects/ProjectDialog';
import { useLanguage } from './LanguageProvider';
import type { Project } from '../types/portfolio';

export function App() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header />
      <main id="main">
        <Hero onOpenProject={setSelectedProject} />
        <Projects onOpenProject={setSelectedProject} />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectDialog
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

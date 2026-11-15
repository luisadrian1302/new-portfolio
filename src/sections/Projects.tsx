import { useState } from 'react';
import { useLanguage } from '../app/LanguageProvider';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../content/projects';
import { ProjectCard } from '../features/projects/ProjectCard';
import type { Project, ProjectCategory } from '../types/portfolio';

export function Projects({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const visible = projects.filter(
    (project) => filter === 'all' || project.categories.includes(filter),
  );
  return (
    <section id="projects" className="section container">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.intro}
      />
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label={t.nav.projects}>
          {(['all', 'web', 'mobile'] as const).map((item) => (
            <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {t.projects[item]}
              <span>
                {item === 'all'
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(item)).length}
              </span>
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {String(visible.length).padStart(2, '0')} {t.projects.count}
        </span>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}
